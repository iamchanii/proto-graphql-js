/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedMessage, $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessage, $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedMessageInnerMessage, $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessageInnerMessage1, $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessageInnerMessage2 } from "./../schema/types/deprecation/deprecation_pb_nexus"
import { $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessage, $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessageInnerMessage } from "./../schema/types/deprecation/file_deprecation_pb_nexus"
import { $$testapis$node$lib$enums$testapi$nested$MessageWithEnums } from "./../schema/types/enums/enums_pb_nexus"
import { $$testapis$node$lib$extensions$testapi$extensions$TestPrefixPrefixedMessage, $$testapis$node$lib$extensions$testapi$extensions$TestPrefixPrefixedMessageInnerMessage } from "./../schema/types/extensions/extensions_pb_nexus"
import { $$testapis$node$lib$field_behavior$testapi$deprecation$FieldBehaviorComentsMessage, $$testapis$node$lib$field_behavior$testapi$deprecation$FieldBehaviorComentsMessagePost } from "./../schema/types/field_behavior/comments_pb_nexus"
import { $$testapis$node$lib$hello$testapi$hello$Hello, $$testapis$node$lib$hello$testapi$hello$Primitives } from "./../schema/types/hello/hello_pb_nexus"
import { $$testapis$node$lib$nested$testapi$nested$ParentMessage, $$testapis$node$lib$nested$testapi$nested$ParentMessageNestedMessage } from "./../schema/types/nested/nested_pb_nexus"
import { $$testapis$node$lib$oneof$testapi$oneof$OneofParent, $$testapis$node$lib$oneof$testapi$oneof$OneofMemberMessage1, $$testapis$node$lib$oneof$testapi$oneof$OneofMemberMessage2 } from "./../schema/types/oneof/oneof_pb_nexus"
import { $$testapis$node$lib$wktypes$testapi$wktypes$Message } from "./../schema/types/wktypes/well_known_types_pb_nexus"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DeprecatedFileMessageInnerMessageInput: { // input type
    body: string; // String!
  }
  DeprecatedFileMessageInput: { // input type
    body: string; // String!
    enum?: NexusGenEnums['DeprecatedFileEnum'] | null; // DeprecatedFileEnum
  }
  DeprecatedMessageInnerMessageInput: { // input type
    body: string; // String!
  }
  DeprecatedMessageInput: { // input type
    body: string; // String!
    enum?: NexusGenEnums['NotDeprecatedEnum'] | null; // NotDeprecatedEnum
  }
  FieldBehaviorComentsMessageInput: { // input type
    inputOnlyField?: NexusGenInputs['FieldBehaviorComentsMessagePostInput'] | null; // FieldBehaviorComentsMessagePostInput
    inputOnlyRequiredField: NexusGenInputs['FieldBehaviorComentsMessagePostInput']; // FieldBehaviorComentsMessagePostInput!
    requiredField: NexusGenInputs['FieldBehaviorComentsMessagePostInput']; // FieldBehaviorComentsMessagePostInput!
    requiredInputOnlyField: NexusGenInputs['FieldBehaviorComentsMessagePostInput']; // FieldBehaviorComentsMessagePostInput!
  }
  FieldBehaviorComentsMessagePostInput: { // input type
    body: string; // String!
  }
  HelloInput: { // input type
    optionalPrimitives?: NexusGenInputs['PrimitivesInput'] | null; // PrimitivesInput
    optionalPrimitivesList?: NexusGenInputs['PrimitivesInput'] | null; // PrimitivesInput
    requiredPrimitives: NexusGenInputs['PrimitivesInput']; // PrimitivesInput!
    requiredPrimitivesList?: NexusGenInputs['PrimitivesInput'][] | null; // [PrimitivesInput!]
  }
  MessageInput: { // input type
    boolValue?: boolean | null; // Boolean
    doubleValue?: number | null; // Float
    floatValue?: number | null; // Float
    int32Value?: number | null; // Int
    int64Value?: string | null; // String
    stringValue?: string | null; // String
    timestamp?: NexusGenScalars['DateTime'] | null; // DateTime
    uint32Value?: number | null; // Int
    uint64Value?: string | null; // String
  }
  MessageWithEnumsInput: { // input type
    myEnum1?: NexusGenEnums['MyEnum1'] | null; // MyEnum1
  }
  NotDeprecatedMessageInnerMessage1Input: { // input type
    body: string; // String!
  }
  NotDeprecatedMessageInnerMessage2Input: { // input type
    body: string; // String!
  }
  NotDeprecatedMessageInput: { // input type
    body: string; // String!
    enum?: NexusGenEnums['DeprecatedEnum'] | null; // DeprecatedEnum
    msg1?: NexusGenInputs['NotDeprecatedMessageInnerMessage1Input'] | null; // NotDeprecatedMessageInnerMessage1Input
    msg2?: NexusGenInputs['NotDeprecatedMessageInnerMessage2Input'] | null; // NotDeprecatedMessageInnerMessage2Input
    msg3?: NexusGenInputs['NotDeprecatedMessageInnerMessage1Input'] | null; // NotDeprecatedMessageInnerMessage1Input
    msg4?: NexusGenInputs['NotDeprecatedMessageInnerMessage2Input'] | null; // NotDeprecatedMessageInnerMessage2Input
  }
  OneofMemberMessage1Input: { // input type
    body: string; // String!
  }
  OneofMemberMessage2Input: { // input type
    imageUrl: string; // String!
  }
  OneofParentInput: { // input type
    normalField: string; // String!
    optoinalMessage1?: NexusGenInputs['OneofMemberMessage1Input'] | null; // OneofMemberMessage1Input
    optoinalMessage2?: NexusGenInputs['OneofMemberMessage2Input'] | null; // OneofMemberMessage2Input
    requiredMessage1?: NexusGenInputs['OneofMemberMessage1Input'] | null; // OneofMemberMessage1Input
    requiredMessage2?: NexusGenInputs['OneofMemberMessage2Input'] | null; // OneofMemberMessage2Input
  }
  ParentMessageInput: { // input type
    body: string; // String!
    nested?: NexusGenInputs['ParentMessageNestedMessageInput'] | null; // ParentMessageNestedMessageInput
    nestedEnum?: NexusGenEnums['ParentMessageNestedEnum'] | null; // ParentMessageNestedEnum
  }
  ParentMessageNestedMessageInput: { // input type
    nestedBody: string; // String!
  }
  PrimitivesInput: { // input type
    requiredBoolValue: boolean; // Boolean!
    requiredDoubleValue: number; // Float!
    requiredFixed32Value: number; // Int!
    requiredFixed64Value: string; // String!
    requiredFloatValue: number; // Float!
    requiredInt32Value: number; // Int!
    requiredInt64Value: string; // String!
    requiredSfixed32Value: number; // Int!
    requiredSfixed64Value: string; // String!
    requiredSint32Value: number; // Int!
    requiredSint64Value: string; // String!
    requiredStringValue: string; // String!
    requiredUint32Value: number; // Int!
    requiredUint64Value: string; // String!
  }
  TestPrefixPrefixedMessageInnerMessageInput: { // input type
    body: string; // String!
  }
  TestPrefixPrefixedMessageInput: { // input type
    body: string; // String!
    prefixedEnum?: NexusGenEnums['TestPrefixPrefixedEnum'] | null; // TestPrefixPrefixedEnum
  }
}

export interface NexusGenEnums {
  DeprecatedEnum: 1 | 0 | 2
  DeprecatedFileEnum: 2 | 0 | 1
  MyEnum1: 2 | 3 | 1 | 0
  NotDeprecatedEnum: 2 | 0 | 1
  ParentMessageNestedEnum: 2 | 1 | 0
  TestPrefixPrefixedEnum: 2 | 0 | 1
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  DeprecatedFileMessage: $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessage;
  DeprecatedFileMessageInnerMessage: $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessageInnerMessage;
  DeprecatedMessage: $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedMessage;
  DeprecatedMessageInnerMessage: $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedMessageInnerMessage;
  FieldBehaviorComentsMessage: $$testapis$node$lib$field_behavior$testapi$deprecation$FieldBehaviorComentsMessage;
  FieldBehaviorComentsMessagePost: $$testapis$node$lib$field_behavior$testapi$deprecation$FieldBehaviorComentsMessagePost;
  Hello: $$testapis$node$lib$hello$testapi$hello$Hello;
  Message: $$testapis$node$lib$wktypes$testapi$wktypes$Message;
  MessageWithEnums: $$testapis$node$lib$enums$testapi$nested$MessageWithEnums;
  NotDeprecatedMessage: $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessage;
  NotDeprecatedMessageInnerMessage1: $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessageInnerMessage1;
  NotDeprecatedMessageInnerMessage2: $$testapis$node$lib$deprecation$testapi$deprecation$NotDeprecatedMessageInnerMessage2;
  OneofMemberMessage1: $$testapis$node$lib$oneof$testapi$oneof$OneofMemberMessage1;
  OneofMemberMessage2: $$testapis$node$lib$oneof$testapi$oneof$OneofMemberMessage2;
  OneofParent: $$testapis$node$lib$oneof$testapi$oneof$OneofParent;
  ParentMessage: $$testapis$node$lib$nested$testapi$nested$ParentMessage;
  ParentMessageNestedMessage: $$testapis$node$lib$nested$testapi$nested$ParentMessageNestedMessage;
  Primitives: $$testapis$node$lib$hello$testapi$hello$Primitives;
  Query: {};
  TestPrefixPrefixedMessage: $$testapis$node$lib$extensions$testapi$extensions$TestPrefixPrefixedMessage;
  TestPrefixPrefixedMessageInnerMessage: $$testapis$node$lib$extensions$testapi$extensions$TestPrefixPrefixedMessageInnerMessage;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
  NotDeprecatedMessageDeprecatedOneof: NexusGenRootTypes['NotDeprecatedMessageInnerMessage1'] | NexusGenRootTypes['NotDeprecatedMessageInnerMessage2'];
  NotDeprecatedMessageNotDeprecatedOneof: NexusGenRootTypes['NotDeprecatedMessageInnerMessage1'] | NexusGenRootTypes['NotDeprecatedMessageInnerMessage2'];
  OneofParentOptionalOneofMembers: NexusGenRootTypes['OneofMemberMessage1'] | NexusGenRootTypes['OneofMemberMessage2'];
  OneofParentRequiredOneofMembers: NexusGenRootTypes['OneofMemberMessage1'] | NexusGenRootTypes['OneofMemberMessage2'];
}

export type NexusGenRootTypes = NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  DeprecatedFileMessage: { // field return type
    body: string; // String!
    enum: NexusGenEnums['DeprecatedFileEnum'] | null; // DeprecatedFileEnum
  }
  DeprecatedFileMessageInnerMessage: { // field return type
    body: string; // String!
  }
  DeprecatedMessage: { // field return type
    body: string; // String!
    enum: NexusGenEnums['NotDeprecatedEnum'] | null; // NotDeprecatedEnum
  }
  DeprecatedMessageInnerMessage: { // field return type
    body: string; // String!
  }
  FieldBehaviorComentsMessage: { // field return type
    outputOnlyField: NexusGenRootTypes['FieldBehaviorComentsMessagePost'] | null; // FieldBehaviorComentsMessagePost
    outputOnlyRequiredField: NexusGenRootTypes['FieldBehaviorComentsMessagePost']; // FieldBehaviorComentsMessagePost!
    requiredField: NexusGenRootTypes['FieldBehaviorComentsMessagePost']; // FieldBehaviorComentsMessagePost!
    requiredOutputOnlyField: NexusGenRootTypes['FieldBehaviorComentsMessagePost']; // FieldBehaviorComentsMessagePost!
  }
  FieldBehaviorComentsMessagePost: { // field return type
    body: string; // String!
  }
  Hello: { // field return type
    optionalPrimitives: NexusGenRootTypes['Primitives'] | null; // Primitives
    optionalPrimitivesList: NexusGenRootTypes['Primitives'] | null; // Primitives
    requiredPrimitives: NexusGenRootTypes['Primitives']; // Primitives!
    requiredPrimitivesList: NexusGenRootTypes['Primitives'][] | null; // [Primitives!]
  }
  Message: { // field return type
    boolValue: boolean | null; // Boolean
    doubleValue: number | null; // Float
    floatValue: number | null; // Float
    int32Value: number | null; // Int
    int64Value: string | null; // String
    stringValue: string | null; // String
    timestamp: NexusGenScalars['DateTime'] | null; // DateTime
    uint32Value: number | null; // Int
    uint64Value: string | null; // String
  }
  MessageWithEnums: { // field return type
    myEnum1: NexusGenEnums['MyEnum1'] | null; // MyEnum1
  }
  NotDeprecatedMessage: { // field return type
    body: string; // String!
    deprecated_oneof: NexusGenRootTypes['NotDeprecatedMessageDeprecatedOneof'] | null; // NotDeprecatedMessageDeprecatedOneof
    enum: NexusGenEnums['DeprecatedEnum'] | null; // DeprecatedEnum
    not_deprecated_oneof: NexusGenRootTypes['NotDeprecatedMessageNotDeprecatedOneof'] | null; // NotDeprecatedMessageNotDeprecatedOneof
  }
  NotDeprecatedMessageInnerMessage1: { // field return type
    body: string; // String!
  }
  NotDeprecatedMessageInnerMessage2: { // field return type
    body: string; // String!
  }
  OneofMemberMessage1: { // field return type
    body: string; // String!
  }
  OneofMemberMessage2: { // field return type
    imageUrl: string; // String!
  }
  OneofParent: { // field return type
    normalField: string; // String!
    optional_oneof_members: NexusGenRootTypes['OneofParentOptionalOneofMembers'] | null; // OneofParentOptionalOneofMembers
    required_oneof_members: NexusGenRootTypes['OneofParentRequiredOneofMembers']; // OneofParentRequiredOneofMembers!
  }
  ParentMessage: { // field return type
    body: string; // String!
    nested: NexusGenRootTypes['ParentMessageNestedMessage'] | null; // ParentMessageNestedMessage
    nestedEnum: NexusGenEnums['ParentMessageNestedEnum'] | null; // ParentMessageNestedEnum
  }
  ParentMessageNestedMessage: { // field return type
    nestedBody: string; // String!
  }
  Primitives: { // field return type
    requiredBoolValue: boolean; // Boolean!
    requiredDoubleValue: number; // Float!
    requiredFixed32Value: number; // Int!
    requiredFixed64Value: string; // String!
    requiredFloatValue: number; // Float!
    requiredInt32Value: number; // Int!
    requiredInt64Value: string; // String!
    requiredSfixed32Value: number; // Int!
    requiredSfixed64Value: string; // String!
    requiredSint32Value: number; // Int!
    requiredSint64Value: string; // String!
    requiredStringValue: string; // String!
    requiredUint32Value: number; // Int!
    requiredUint64Value: string; // String!
  }
  Query: { // field return type
    ok: boolean; // Boolean!
  }
  TestPrefixPrefixedMessage: { // field return type
    body: string; // String!
    prefixedEnum: NexusGenEnums['TestPrefixPrefixedEnum'] | null; // TestPrefixPrefixedEnum
  }
  TestPrefixPrefixedMessageInnerMessage: { // field return type
    body: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  DeprecatedFileMessage: { // field return type name
    body: 'String'
    enum: 'DeprecatedFileEnum'
  }
  DeprecatedFileMessageInnerMessage: { // field return type name
    body: 'String'
  }
  DeprecatedMessage: { // field return type name
    body: 'String'
    enum: 'NotDeprecatedEnum'
  }
  DeprecatedMessageInnerMessage: { // field return type name
    body: 'String'
  }
  FieldBehaviorComentsMessage: { // field return type name
    outputOnlyField: 'FieldBehaviorComentsMessagePost'
    outputOnlyRequiredField: 'FieldBehaviorComentsMessagePost'
    requiredField: 'FieldBehaviorComentsMessagePost'
    requiredOutputOnlyField: 'FieldBehaviorComentsMessagePost'
  }
  FieldBehaviorComentsMessagePost: { // field return type name
    body: 'String'
  }
  Hello: { // field return type name
    optionalPrimitives: 'Primitives'
    optionalPrimitivesList: 'Primitives'
    requiredPrimitives: 'Primitives'
    requiredPrimitivesList: 'Primitives'
  }
  Message: { // field return type name
    boolValue: 'Boolean'
    doubleValue: 'Float'
    floatValue: 'Float'
    int32Value: 'Int'
    int64Value: 'String'
    stringValue: 'String'
    timestamp: 'DateTime'
    uint32Value: 'Int'
    uint64Value: 'String'
  }
  MessageWithEnums: { // field return type name
    myEnum1: 'MyEnum1'
  }
  NotDeprecatedMessage: { // field return type name
    body: 'String'
    deprecated_oneof: 'NotDeprecatedMessageDeprecatedOneof'
    enum: 'DeprecatedEnum'
    not_deprecated_oneof: 'NotDeprecatedMessageNotDeprecatedOneof'
  }
  NotDeprecatedMessageInnerMessage1: { // field return type name
    body: 'String'
  }
  NotDeprecatedMessageInnerMessage2: { // field return type name
    body: 'String'
  }
  OneofMemberMessage1: { // field return type name
    body: 'String'
  }
  OneofMemberMessage2: { // field return type name
    imageUrl: 'String'
  }
  OneofParent: { // field return type name
    normalField: 'String'
    optional_oneof_members: 'OneofParentOptionalOneofMembers'
    required_oneof_members: 'OneofParentRequiredOneofMembers'
  }
  ParentMessage: { // field return type name
    body: 'String'
    nested: 'ParentMessageNestedMessage'
    nestedEnum: 'ParentMessageNestedEnum'
  }
  ParentMessageNestedMessage: { // field return type name
    nestedBody: 'String'
  }
  Primitives: { // field return type name
    requiredBoolValue: 'Boolean'
    requiredDoubleValue: 'Float'
    requiredFixed32Value: 'Int'
    requiredFixed64Value: 'String'
    requiredFloatValue: 'Float'
    requiredInt32Value: 'Int'
    requiredInt64Value: 'String'
    requiredSfixed32Value: 'Int'
    requiredSfixed64Value: 'String'
    requiredSint32Value: 'Int'
    requiredSint64Value: 'String'
    requiredStringValue: 'String'
    requiredUint32Value: 'Int'
    requiredUint64Value: 'String'
  }
  Query: { // field return type name
    ok: 'Boolean'
  }
  TestPrefixPrefixedMessage: { // field return type name
    body: 'String'
    prefixedEnum: 'TestPrefixPrefixedEnum'
  }
  TestPrefixPrefixedMessageInnerMessage: { // field return type name
    body: 'String'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
  NotDeprecatedMessageDeprecatedOneof: "NotDeprecatedMessageInnerMessage1" | "NotDeprecatedMessageInnerMessage2"
  NotDeprecatedMessageNotDeprecatedOneof: "NotDeprecatedMessageInnerMessage1" | "NotDeprecatedMessageInnerMessage2"
  OneofParentOptionalOneofMembers: "OneofMemberMessage1" | "OneofMemberMessage2"
  OneofParentRequiredOneofMembers: "OneofMemberMessage1" | "OneofMemberMessage2"
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "NotDeprecatedMessageDeprecatedOneof" | "NotDeprecatedMessageNotDeprecatedOneof" | "OneofParentOptionalOneofMembers" | "OneofParentRequiredOneofMembers";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}