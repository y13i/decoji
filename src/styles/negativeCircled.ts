import { StyleBase } from ".";
import { buildMap, alphabeticCapital } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const NegativeCircled: StyleBase & {
  name: "negative-circled";
} = {
  name: "negative-circled",
  mapping: buildMap(alphabeticCapital, "🅐")
};
