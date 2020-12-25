// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: hello/hello.proto

import { objectType, inputObjectType, list, nullable, nonNull } from "nexus";
import * as $$testapis$node$lib$hello from "@testapis/node/lib/hello";
export type $$testapis$node$lib$hello$testapi$hello$Hello = $$testapis$node$lib$hello.testapi.hello.IHello;
export type $$testapis$node$lib$hello$testapi$hello$Primitives = $$testapis$node$lib$hello.testapi.hello.IPrimitives;
export const Hello = objectType({
    name: "Hello",
    description: "",
    definition(t) {
        t.field("requiredPrimitives", {
            type: nonNull("Primitives"),
            description: "Required.",
            resolve(root) { return root.requiredPrimitives!; }
        });
        t.field("optionalPrimitives", {
            type: nullable("Primitives"),
            description: "Optional.",
            resolve(root) { return root.optionalPrimitives ?? null; }
        });
        t.field("requiredPrimitivesList", {
            type: list(nonNull("Primitives")),
            description: "Required.",
            resolve(root) { return root.requiredPrimitivesList!; }
        });
        t.field("optionalPrimitivesList", {
            type: nullable("Primitives"),
            description: "Optional.",
            resolve(root) { return root.optionalPrimitivesList ?? null; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$hello$testapi$hello$Hello" }
});
export const Primitives = objectType({
    name: "Primitives",
    description: "",
    definition(t) {
        t.field("requiredDoubleValue", {
            type: nonNull("Float"),
            description: "",
            resolve(root) { return root.requiredDoubleValue!; }
        });
        t.field("requiredFloatValue", {
            type: nonNull("Float"),
            description: "",
            resolve(root) { return root.requiredFloatValue!; }
        });
        t.field("requiredInt32Value", {
            type: nonNull("Int"),
            description: "",
            resolve(root) { return root.requiredInt32Value!; }
        });
        t.field("requiredInt64Value", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredInt64Value!.toString(); }
        });
        t.field("requiredUint32Value", {
            type: nonNull("Int"),
            description: "",
            resolve(root) { return root.requiredUint32Value!; }
        });
        t.field("requiredUint64Value", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredUint64Value!.toString(); }
        });
        t.field("requiredSint32Value", {
            type: nonNull("Int"),
            description: "",
            resolve(root) { return root.requiredSint32Value!; }
        });
        t.field("requiredSint64Value", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredSint64Value!.toString(); }
        });
        t.field("requiredFixed32Value", {
            type: nonNull("Int"),
            description: "",
            resolve(root) { return root.requiredFixed32Value!; }
        });
        t.field("requiredFixed64Value", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredFixed64Value!.toString(); }
        });
        t.field("requiredSfixed32Value", {
            type: nonNull("Int"),
            description: "",
            resolve(root) { return root.requiredSfixed32Value!; }
        });
        t.field("requiredSfixed64Value", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredSfixed64Value!.toString(); }
        });
        t.field("requiredBoolValue", {
            type: nonNull("Boolean"),
            description: "",
            resolve(root) { return root.requiredBoolValue!; }
        });
        t.field("requiredStringValue", {
            type: nonNull("String"),
            description: "",
            resolve(root) { return root.requiredStringValue!; }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$hello$testapi$hello$Primitives" }
});
export const HelloInput = inputObjectType({
    name: "HelloInput",
    description: "",
    definition(t) {
        t.field("requiredPrimitives", {
            type: nonNull("PrimitivesInput"),
            description: "Required."
        });
        t.field("optionalPrimitives", {
            type: nullable("PrimitivesInput"),
            description: "Optional."
        });
        t.field("requiredPrimitivesList", {
            type: list(nonNull("PrimitivesInput")),
            description: "Required."
        });
        t.field("optionalPrimitivesList", {
            type: nullable("PrimitivesInput"),
            description: "Optional."
        });
    }
});
export const PrimitivesInput = inputObjectType({
    name: "PrimitivesInput",
    description: "",
    definition(t) {
        t.field("requiredDoubleValue", {
            type: nonNull("Float"),
            description: ""
        });
        t.field("requiredFloatValue", {
            type: nonNull("Float"),
            description: ""
        });
        t.field("requiredInt32Value", {
            type: nonNull("Int"),
            description: ""
        });
        t.field("requiredInt64Value", {
            type: nonNull("String"),
            description: ""
        });
        t.field("requiredUint32Value", {
            type: nonNull("Int"),
            description: ""
        });
        t.field("requiredUint64Value", {
            type: nonNull("String"),
            description: ""
        });
        t.field("requiredSint32Value", {
            type: nonNull("Int"),
            description: ""
        });
        t.field("requiredSint64Value", {
            type: nonNull("String"),
            description: ""
        });
        t.field("requiredFixed32Value", {
            type: nonNull("Int"),
            description: ""
        });
        t.field("requiredFixed64Value", {
            type: nonNull("String"),
            description: ""
        });
        t.field("requiredSfixed32Value", {
            type: nonNull("Int"),
            description: ""
        });
        t.field("requiredSfixed64Value", {
            type: nonNull("String"),
            description: ""
        });
        t.field("requiredBoolValue", {
            type: nonNull("Boolean"),
            description: ""
        });
        t.field("requiredStringValue", {
            type: nonNull("String"),
            description: ""
        });
    }
});
