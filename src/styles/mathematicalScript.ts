import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalScript: StyleBase & { name: "mathematical-script" } = {
  name: "mathematical-script",

  mapping: {
    ...buildMap(alphabetic, "𝒜"),

    ...[..."BEFHILMRego"].reduce(
      (acc, c) => ({ ...acc, [c]: undefined }),
      {} as Record<string, undefined>
    )
  }
};
