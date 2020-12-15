// Code generated by protoc-gen-nexus. DO NOT EDIT.
// source: hello/hello.proto

import { objectType } from "@nexus/schema";
import * as proto_nexus from "proto-nexus";
import * as $$testapis$node$lib$hello$hello_pb from "@testapis/node/lib/hello/hello_pb";
export type $$testapis$node$lib$hello$hello_pb$User = $$testapis$node$lib$hello$hello_pb.User;
export type $$testapis$node$lib$hello$hello_pb$Post = $$testapis$node$lib$hello$hello_pb.Post;
export const User = objectType({
    name: "User",
    description: "User entity",
    definition(t) {
        t.nonNull.int("id", {
            description: "Required. Output only. ID.",
            resolve(root) { return root.getId(); }
        });
        t.nonNull.string("name", {
            description: "Required. User's login name.",
            resolve(root) { return root.getName(); }
        });
        t.nonNull.list.field("posts", {
            description: "Required. Posts that are written by the user.",
            type: "Post",
            resolve(root) { return root.getPostsList(); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$hello$hello_pb$User" }
});
export const Post = objectType({
    name: "Post",
    description: "Post entity",
    definition(t) {
        t.nonNull.int("id", {
            description: "Required. Output only. ID.",
            resolve(root) { return root.getId(); }
        });
        t.nonNull.string("title", {
            description: "Required. Article.",
            resolve(root) { return root.getTitle(); }
        });
        t.nonNull.string("body", {
            description: "Required. Body.",
            resolve(root) { return root.getBody(); }
        });
        t.nonNull.dateTime("publishedTime", {
            description: "Required. Output only. Published time.",
            resolve(root) { return proto_nexus.timestampToDate(root.getPublishedTime()); }
        });
    },
    sourceType: { module: __filename, export: "$$testapis$node$lib$hello$hello_pb$Post" }
});
