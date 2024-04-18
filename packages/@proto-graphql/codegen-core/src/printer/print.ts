import { DescFile } from "@bufbuild/protobuf";
import { code, Code } from "ts-poet";

export function printCodes(
  codes: Code[],
  programName: string,
  file: DescFile
): string {
  return (codes.length === 0 ? code`export {};` : code`${codes}`).toString({
    prefix: `
      // Code generated by ${programName}. DO NOT EDIT.
      // source: ${file.name}.proto

      /* eslint-disable */
    `,
    dprintOptions: {
      lineWidth: 80,
      indentWidth: 2,
      useTabs: false,
      semiColons: "always",
      quoteStyle: "alwaysDouble",
      quoteProps: "asNeeded",
      newLineKind: "lf",
      useBraces: "whenNotSingleLine",
      bracePosition: "sameLineUnlessHanging",
      singleBodyPosition: "maintain",
      nextControlFlowPosition: "sameLine",
      trailingCommas: "onlyMultiLine",
      operatorPosition: "nextLine",
      preferHanging: false,
      "arrowFunction.useParentheses": "force",
    },
  });
}
