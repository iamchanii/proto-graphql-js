import {
  processCodeGeneration,
  snapshotGeneratedFiles,
} from "./__helpers__/process.test.helper";

describe("custom types", () => {
  it("generates nexus DSLs", async () => {
    const resp = await processCodeGeneration(
      "testapis.custom_types",
      "scalar=testapis.custom_types.Date=Date"
    );
    snapshotGeneratedFiles(resp, [
      "custom_types/post_pb_nexus.ts",
      "custom_types/date_pb_nexus.ts",
    ]);
  });
});
