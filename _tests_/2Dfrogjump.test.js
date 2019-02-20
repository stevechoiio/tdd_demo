/*

a frog starts at a locataion 'start' which is a array of two numbers 
representing x,y coordinate and is trying to reach 'end' 
which is also an array of two numbers represeing x,y coordinate.
function receives a 'jumpdistance' that represents the distance frog can jump at once.
jumps is either horizontal/vertical only. 
determine if the trip is possible and if yes,return number of jumps, if impossible, return false


*/

const frogJump = (start, end, distance) => {
  if (
    (end[0] - start[0]) % distance === 0 &&
    (end[1] - start[1]) % distance === 0
  ) {
    return (end[0] - start[0]) / distance + (end[1] - start[1]) / distance;
  }
  return false;
};

describe("frog jump 2D", () => {
  describe("impossible", () => {
    test("over the destination both x and y", () => {
      expect(frogJump([0, 0], [1, 1], 2)).toEqual(false);
    });
    test("passed the destination for x", () => {
      expect(frogJump([0, 0], [1, 2], 2)).toEqual(false);
    });
    test("passed the destination for y", () => {
      expect(frogJump([0, 0], [2, 1], 2)).toEqual(false);
    });
  });
  describe("possible", () => {
    test("lands with one x-axis jump", () => {
      expect(frogJump([0, 0], [1, 0], 1)).toEqual(1);
    });
    test("lands with one y-axis jump", () => {
      expect(frogJump([0, 0], [0, 1], 1)).toEqual(1);
    });
    test("lands with one x-axis & one y-axis jump", () => {
      expect(frogJump([0, 0], [1, 1], 1)).toEqual(2);
    });
  });
});
