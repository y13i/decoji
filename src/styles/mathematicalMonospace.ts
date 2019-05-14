import { StyleBase } from ".";
import { buildMap, alphabetic, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalMonospace: StyleBase & {
  name: "mathematical-monospace";
} = {
  name: "mathematical-monospace",
  mapping: {
    ...buildMap(alphabetic, "𝙰"),
    ...buildMap(numeric0to9, "𝟶")
  }
};
