import { StyleBase } from ".";
import {
  buildMap,
  alphabeticSmall,
  alphabeticCapital,
  numeric1to9
} from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumerics/
// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const Parenthesized: StyleBase & {
  name: "parenthesized";
} = {
  name: "parenthesized",
  mapping: {
    ...buildMap(numeric1to9, "⑴"),
    ...buildMap(alphabeticSmall, "⒜"),
    ...buildMap(alphabeticCapital, "🄐")
  }
};
