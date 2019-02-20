const frogjump = require("./frogjump");

describe("frogjumps", () => {
  test("when start is less than end", () => {
    expect(frogjump(1, 5, 5)).toEqual(1);
  });
  test("when start is less than end and frog lands exactly at the end", () => {
    expect(frogjump(1, 5, 1)).toEqual(4);
  });
  test("when start is after end ", () => {
    expect(frogjump(5, 1, 4)).toEqual(undefined);
  });
  test("when ditance is negative ", () => {
    expect(frogjump(1, 5, -1)).toEqual(undefined);
  });
});
