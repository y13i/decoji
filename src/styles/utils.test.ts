import "jest";

import { buildMap } from "./utils";

test("buildMap", () => {
  expect(buildMap(["a", "b"], "b")).toEqual({ a: "b", b: "c" });
});
