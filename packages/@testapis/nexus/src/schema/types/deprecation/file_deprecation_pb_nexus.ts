// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: deprecation/file_deprecation.proto

import { objectType, inputObjectType, enumType, nullable, nonNull } from "nexus";
import * as $$testapis$node$lib$deprecation from "@testapis/node/lib/deprecation";
export type $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessage = $$testapis$node$lib$deprecation.testapi.deprecation.IDeprecatedFileMessage;
export type $$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessageInnerMessage = $$testapis$node$lib$deprecation.testapi.deprecation.IDeprecatedFileMessage.InnerMessage;
export const DeprecatedFileMessage = objectType({
    name: "DeprecatedFileMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            resolve(root) { return root.body!; }
        });
        t.field("enum", {
            type: nullable("DeprecatedFileEnum"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            resolve(root) { return root.enum ?? null; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessage" }
});
export const DeprecatedFileMessageInnerMessage = objectType({
    name: "DeprecatedFileMessageInnerMessage",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            resolve(root) { return root.body!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$deprecation$testapi$deprecation$DeprecatedFileMessageInnerMessage" }
});
export const DeprecatedFileMessageInput = inputObjectType({
    name: "DeprecatedFileMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated."
        });
        t.field("enum", {
            type: nullable("DeprecatedFileEnum"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated."
        });
    }
});
export const DeprecatedFileMessageInnerMessageInput = inputObjectType({
    name: "DeprecatedFileMessageInnerMessageInput",
    description: "",
    definition(t) {
        t.field("body", {
            type: nonNull("String"),
            description: "",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated."
        });
    }
});
export const DeprecatedFileEnum = enumType({
    name: "DeprecatedFileEnum",
    description: "",
    members: [
        {
            name: "DEPRECATED_FILE_ENUM_UNSPECIFIED",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            value: 0
        },
        {
            name: "DEPRECATED_FILE_FOO",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            value: 1
        },
        {
            name: "DEPRECATED_FILE_BAR",
            deprecation: "deprecation/file_deprecation.proto is mark as deprecated.",
            value: 2
        }
    ]
});
