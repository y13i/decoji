import { StyleBase } from ".";
import { buildMap, numeric1to9 } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumerics/
// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const Comma: StyleBase & {
  name: "comma";
} = {
  name: "comma",
  mapping: { ...buildMap(numeric1to9, "🄂") }
};
