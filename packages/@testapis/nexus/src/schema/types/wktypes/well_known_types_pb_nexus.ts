// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: wktypes/well_known_types.proto

import { objectType } from "@nexus/schema";
import * as proto_nexus from "proto-nexus";
import * as $$testapis$node$lib$wktypes$well_known_types_pb from "@testapis/node/lib/wktypes/well_known_types_pb";
export type $$testapis$node$lib$wktypes$well_known_types_pb$Message = $$testapis$node$lib$wktypes$well_known_types_pb.Message;
export const Message = objectType({
    name: "Message",
    description: "",
    definition(t) {
        t.nullable.dateTime("timestamp", {
            description: "",
            resolve(root) { return proto_nexus.timestampToDate(root.getTimestamp()); }
        });
        t.nullable.int("int32Value", {
            description: "",
            resolve(root) { return proto_nexus.unwrapInt32Value(root.getInt32Value()); }
        });
        t.nullable.int("int64Value", {
            description: "",
            resolve(root) { return proto_nexus.unwrapInt64Value(root.getInt64Value()); }
        });
        t.nullable.int("uint32Value", {
            description: "",
            resolve(root) { return proto_nexus.unwrapUInt32Value(root.getUint32Value()); }
        });
        t.nullable.int("uint64Value", {
            description: "",
            resolve(root) { return proto_nexus.unwrapUInt64Value(root.getUint64Value()); }
        });
        t.nullable.float("floatValue", {
            description: "",
            resolve(root) { return proto_nexus.unwrapFloatValue(root.getFloatValue()); }
        });
        t.nullable.float("doubleValue", {
            description: "",
            resolve(root) { return proto_nexus.unwrapDoubleValue(root.getDoubleValue()); }
        });
        t.nullable.boolean("boolValue", {
            description: "",
            resolve(root) { return proto_nexus.unwrapBoolValue(root.getBoolValue()); }
        });
        t.nullable.string("stringValue", {
            description: "",
            resolve(root) { return proto_nexus.unwrapStringValue(root.getStringValue()); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$wktypes$well_known_types_pb$Message" }
});
