import {
  EnumType,
  filename,
  InputObjectField,
  InputObjectType,
  InterfaceType,
  ObjectField,
  ObjectOneofField,
  ObjectType,
  OneofUnionType,
  PrinterOptions,
  SquashedOneofUnionType,
} from "@proto-graphql/codegen-core";
import * as path from "path";
import { code, Code, imp } from "ts-poet";

export type PothosPrinterOptions = Extract<PrinterOptions, { dsl: "pothos" }>;

export function pothosRef(
  type: ObjectType | InputObjectType | EnumType | OneofUnionType | SquashedOneofUnionType | InterfaceType
): Code {
  return code`${pothosRefName(type)}`;
}

function pothosRefName(
  type: ObjectType | InputObjectType | EnumType | OneofUnionType | SquashedOneofUnionType | InterfaceType
): string {
  return `${type.typeName}$Ref`;
}

export function shapeType(type: InputObjectType): Code {
  return code`${shapeTypeName(type)}`;
}

export function shapeTypeName(type: InputObjectType): string {
  return `${type.typeName}$Shape`;
}

export function fieldTypeRef(
  field:
    | ObjectField<ObjectType | EnumType | InterfaceType | SquashedOneofUnionType>
    | InputObjectField<InputObjectType | EnumType>
    | ObjectOneofField,
  opts: PothosPrinterOptions
): Code {
  const importPath = pbPothosImportPath(field, opts);
  if (importPath == null) return pothosRef(field.type);

  const imported = imp(`IMPORTED_PLACEHOLDER@${importPath}`);
  imported.symbol = pothosRefName(field.type); // NOTE: Workaround for ts-poet not recognizing "$" as an identifier
  return code`${imported}`;
}

export function fieldTypeShape(field: InputObjectField<InputObjectType>, opts: PothosPrinterOptions): Code {
  const importPath = pbPothosImportPath(field, opts);
  if (importPath == null) return shapeType(field.type);

  const imported = imp(`IMPORTED_PLACEHOLDER@${importPath}`);
  imported.symbol = shapeTypeName(field.type); // NOTE: Workaround for ts-poet not recognizing "$" as an identifier
  return code`${imported}`;
}

function pbPothosImportPath(
  field:
    | ObjectField<ObjectType | EnumType | InterfaceType | SquashedOneofUnionType>
    | InputObjectField<InputObjectType | EnumType>
    | ObjectOneofField,
  opts: PothosPrinterOptions
): string | null {
  if (field instanceof ObjectOneofField) return null;
  const [fromPath, toPath] = [filename(field.parent, opts), filename(field.type, opts)].map((f) =>
    path.isAbsolute(f) ? `.${path.sep}${f}` : f
  );

  if (fromPath === toPath) return null;

  const importPath = path.relative(path.dirname(fromPath), toPath).replace(/\.ts$/, "");
  return importPath.match(/^[\.\/]/) ? importPath : `./${importPath}`;
}

export function pothosBuilder(
  type: ObjectType | InputObjectType | EnumType | OneofUnionType | SquashedOneofUnionType,
  opts: Pick<PothosPrinterOptions, "pothos" | "fileLayout">
): Code {
  const importPath = opts.pothos.builderPath.startsWith(".")
    ? path.relative(path.dirname(filename(type, opts)), opts.pothos.builderPath)
    : opts.pothos.builderPath;
  return code`${imp(`builder@${importPath}`)}`;
}
