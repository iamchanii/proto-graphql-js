import type { GraphQLInputObjectType } from "graphql";
import { expect, it } from "vitest";
import { schema } from "./__helpers__/testSchema";

it("creates subset types", () => {
  const type = schema.getType("TestSubsetInput") as GraphQLInputObjectType;
  const fields = type.getFields();
  expect(
    Object.values(fields).map((f) => ({
      name: f.name,
      description: f.description,
      type: f.type,
    })),
  ).toMatchInlineSnapshot(`
    [
      {
        "description": "Test string field",
        "name": "foo",
        "type": "String!",
      },
      {
        "description": "Test boolean field",
        "name": "baz",
        "type": "Boolean!",
      },
    ]
  `);
});
