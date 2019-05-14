import { StyleBase } from ".";
import { buildMap, alphabetic, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalDoubleStruck: StyleBase & {
  name: "mathematical-double-struck";
} = {
  name: "mathematical-double-struck",

  mapping: {
    ...buildMap(alphabetic, "𝔸"),
    ...buildMap(numeric0to9, "𝟘"),

    ...[..."CHNPQRZ"].reduce(
      (acc, c) => ({ ...acc, [c]: undefined }),
      {} as Record<string, undefined>
    )
  }
};
