import { ProtoMessage } from "@proto-graphql/proto-descriptors";

import { EnumType } from "./EnumType";
import { InputObjectField } from "./InputObjectField";
import { ScalarType } from "./ScalarType";
import { TypeBase } from "./TypeBase";
import { getInputObjectFieldType } from "./types";
import { gqlTypeName, isIgnoredField, isOutputOnlyField } from "./util";
import * as extensions from "../__generated__/extensions/graphql/schema_pb";

export class InputObjectType extends TypeBase<ProtoMessage> {
  /**
   * @override
   */
  override get typeName(): string {
    return `${gqlTypeName(this.proto)}Input`;
  }

  get fields(): InputObjectField<ScalarType | EnumType | InputObjectType>[] {
    return [
      ...this.proto.fields
        .filter((f) => !isOutputOnlyField(f))
        .filter((f) => !isIgnoredField(f))
        .map(
          (f) =>
            new InputObjectField(
              getInputObjectFieldType(f, this.options),
              this,
              f
            )
        ),
    ];
  }

  public hasPartialInput(): boolean {
    const noPartial =
      this.proto.descriptor
        .getOptions()
        ?.getExtension(extensions.inputType)
        ?.getNoPartial() ?? false;
    return !noPartial;
  }

  public toPartialInput(): InputObjectType {
    if (!this.hasPartialInput()) {
      throw new Error(`${this.typeName} does not support partial input`);
    }
    return new PartialInputObjectType(this.proto, this.options);
  }
}

class PartialInputObjectType extends InputObjectType {
  override get typeName(): string {
    return `${gqlTypeName(this.proto)}PartialInput`;
  }

  override get fields() {
    return super.fields.map((f) => f.toPartialInput());
  }
}
