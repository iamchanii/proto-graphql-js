import {
  compact,
  OneofUnionType,
  protobufGraphQLExtensions,
  Registry,
  SquashedOneofUnionType,
} from "@proto-graphql/codegen-core";
import { code, Code, joinCode, literalOf } from "ts-poet";

import { fieldType, impNexus, NexusPrinterOptions, nexusTypeDef } from "./util";

/**
 * @example
 * ```ts
 * export cosnt Oneof = unionType({
 *   name: "Oneof",
 *   // ...
 * })
 * ```
 */
export function createOneofUnionTypeCode(
  type: OneofUnionType | SquashedOneofUnionType,
  registry: Registry,
  opts: NexusPrinterOptions,
): Code {
  const typeOpts = {
    name: type.typeName,
    description: type.description,
    definition: code`(t) => {
      t.members(${joinCode(
        type.fields.map((f) => fieldType(f, opts)),
        { on: "," },
      )});
    }`,
    extensions: protobufGraphQLExtensions(type, registry),
  };
  return code`export const ${nexusTypeDef(type)} = ${impNexus(
    "unionType",
  )}(${literalOf(compact(typeOpts))});`;
}
