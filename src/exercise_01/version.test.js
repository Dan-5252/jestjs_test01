import { doStuff } from "./function1.js";
import { jest } from "jest";

jest.mock("doStuff", () => true);

describe("Example", () => {
  test("testist", () => {
    expect(doStuff(100)).toEqual(true);
  });
});
