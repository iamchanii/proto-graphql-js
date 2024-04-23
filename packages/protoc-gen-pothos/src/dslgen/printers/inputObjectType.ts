import {
  compact,
  InputObjectType,
  protobufGraphQLExtensions,
  protoType,
  Registry,
  ScalarType,
  tsFieldName,
} from "@proto-graphql/codegen-core";
import { Code, code, imp, joinCode, literalOf } from "ts-poet";

import { createFieldRefCode, createNoopFieldRefCode } from "./field";
import {
  fieldTypeShape,
  pothosBuilder,
  PothosPrinterOptions,
  pothosRef,
  shapeType,
} from "./util";

/**
 * @example
 * ```ts
 * export type HelloInput$Shape = {
 *   // ...
 * }
 * export const HelloInput$Ref: pothos.InputObjectRef<Hello$SHape> = builder.inputRef("HelloInput").implement({
 *   description: "...",
 *   fields: (t) => ({
 *     // ...
 *   }),
 * })
 * ```
 */
export function createInputObjectTypeCode(
  type: InputObjectType,
  registry: Registry,
  opts: PothosPrinterOptions,
): Code {
  const shapeTypeCode = code`
    export type ${shapeType(type)} = {
      ${joinCode(
        type.fields.map((f) => {
          let typeNode: Code;
          if (f.type instanceof InputObjectType) {
            // @ts-expect-error f should be inferred as InputObjectField<InputObjectType>
            typeNode = code`${fieldTypeShape(f, opts)}`;
            if (f.isList()) typeNode = code`Array<${typeNode}>`;
          } else {
            typeNode = code`${protoType(type.proto, opts)}[${literalOf(
              tsFieldName(f.proto, opts),
            )}]`;
          }
          return f.isNullable()
            ? code`${f.name}?: ${typeNode} | null,`
            : code`${f.name}: ${
                f.type instanceof ScalarType && f.type.isCustomScalar()
                  ? code`NonNullable<${typeNode}>`
                  : typeNode
              },`;
        }),
      )}
    };
  `;

  const refCode = code`
    export const ${pothosRef(type)}: ${imp(
      "InputObjectRef@@pothos/core",
    )}<${shapeType(type)}> =
      ${pothosBuilder(type, opts)}.inputRef<${shapeType(type)}>(${literalOf(
        type.typeName,
      )}).implement(
        ${literalOf(
          compact({
            description: type.description,
            fields: code`t => ({${
              type.fields.length > 0
                ? type.fields.map(
                    (f) =>
                      code`${f.name}: ${createFieldRefCode(
                        f,
                        registry,
                        opts,
                      )},`,
                  )
                : code`_: ${createNoopFieldRefCode({ input: true })}`
            }})`,
            extensions: protobufGraphQLExtensions(type, registry),
          }),
        )}
      );
  `;

  return code`
    ${shapeTypeCode}
    ${refCode}
  `;
}
