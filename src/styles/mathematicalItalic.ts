import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalItalic: StyleBase & { name: "mathematical-italic" } = {
  name: "mathematical-italic",

  mapping: {
    ...buildMap(alphabetic, "𝐴"),
    h: undefined
  }
};
