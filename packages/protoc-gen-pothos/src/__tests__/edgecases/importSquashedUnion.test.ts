import { itGeneratesDSLsToMatchSnapshtos } from "../__helpers__/process.test.helper";

describe("import squashed union", () => {
  itGeneratesDSLsToMatchSnapshtos(
    "testapis.edgecases.import_squashed_union.pkg1",
    ["edgecases/import_squashed_union/pkg1/types.pb.pothos.ts"],
  );
  itGeneratesDSLsToMatchSnapshtos(
    "testapis.edgecases.import_squashed_union.pkg2",
    ["edgecases/import_squashed_union/pkg2/types.pb.pothos.ts"],
  );
});
