import { ProtoFile, ProtoRegistry } from "@proto-graphql/proto-descriptors";
import ts from "typescript";
import { collectTypesFromFile, DslFile, GenerationParams } from "@proto-graphql/codegen-core";
import { createImportDecls, createReExportStmts, createTypeDslStmts } from "./dslgen";

export function generateFiles(
  registry: ProtoRegistry,
  file: ProtoFile,
  opts: GenerationParams
): { filename: string; content: string }[] {
  const dslFile = new DslFile(file, { ...opts, dsl: "nexus" });
  const types = collectTypesFromFile(dslFile, registry);

  switch (opts.fileLayout) {
    case "proto_file": {
      return [
        {
          filename: dslFile.filename,
          content: printSource(types, file),
        },
      ];
    }
    case "graphql_type": {
      return types.map((t) => ({
        filename: t.filename,
        content: printSource([t], file),
      }));
    }
    /* istanbul ignore next */
    default: {
      const _exhaustiveCheck: never = opts.fileLayout;
      throw "unreachable";
    }
  }
}

function printSource(types: ReturnType<typeof collectTypesFromFile>, file: ProtoFile): string {
  const ast = [
    // `import * as nexus from "nexus";`
    // `import * as proto_nexus from "proto-nexus";`
    // `import * as _$hello$hello_pb from "./hello/hello_pb";`
    ...createImportDecls(types),
    // `export _$hello$hello_pb$Hello = _$hello$hello_pb.Hello;`
    ...createReExportStmts(types),
    // `export cosnt Hello = objectType({ ... });`
    // `export cosnt HelloInput = inputObjectType({ ... });`
    // `export cosnt Oneof = unionType({ ... });`
    // `export const Role = enumType({ ... });`
    ...createTypeDslStmts(types),
  ];

  if (ast.length === 0) {
    ast.push(
      // `export {}`
      ts.factory.createExportDeclaration(undefined, undefined, false, ts.factory.createNamedExports([]), undefined)
    );
  }

  const nexusFile = ts.factory.updateSourceFile(
    ts.createSourceFile("generated.ts", "", ts.ScriptTarget.Latest, false, ts.ScriptKind.TS),
    ast,
    false
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const result = printer.printFile(nexusFile);

  const content = [
    "// Code generated by protoc-gen-nexus. DO NOT EDIT.",
    `// source: ${file.descriptor.getName()}`,
    "",
    result,
  ].join("\n");

  return content;
}
