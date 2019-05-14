import { StyleBase } from ".";
import { buildMap, alphabeticCapital } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const RegionalIndicatorSymbol: StyleBase & {
  name: "regional-indicator-symbol";
} = {
  name: "regional-indicator-symbol",
  mapping: buildMap(alphabeticCapital, "🇦")
};
