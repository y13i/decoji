import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalFraktur: StyleBase & {
  name: "mathematical-fraktur";
} = {
  name: "mathematical-fraktur",

  mapping: {
    ...buildMap(alphabetic, "𝔄"),

    ...[..."CHIRZ"].reduce(
      (acc, c) => ({ ...acc, [c]: undefined }),
      {} as Record<string, undefined>
    )
  }
};
