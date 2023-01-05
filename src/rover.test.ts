import { marsRover } from "./rover";
describe("MarsRover", () => {
  it("Should rotate the rover right", () => {
    expect(marsRover({x: 1, y: 1, direction:"N"}, "R")).toStrictEqual({"direction": "E", "x": 1, "y": 1});
  });
  it("Should move the rover 1 north", () => {
    expect(marsRover({x: 1, y: 1, direction:"N"}, "M")).toStrictEqual({"direction": "N", "x": 1, "y": 2});
  });
  it("Should move the rover", () => {
    expect(marsRover({x: 3, y: 3, direction:"N"}, "LMLMRMRM")).toStrictEqual({"direction": "N", "x": 3, "y": 1});
  });
});
