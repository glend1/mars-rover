import * as utils from './utils';
 
describe("createPlateau", () => {
    it("Should return an array of 1 length", () => {
      expect(utils.createPlateau(1)).toStrictEqual([[""]]);
    });
    it("Should return an array of 5 length", () => {
        expect(utils.createPlateau(5)).toStrictEqual([["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]);
    });
});

describe("rotateLeft", () => {
      it("Should change N to W", () => {
        expect(utils.rotateLeft("N")).toStrictEqual("W");
      });
      it("Should change W to S", () => {
        expect(utils.rotateLeft("W")).toStrictEqual("S");
      });
      it("Should change S to E", () => {
        expect(utils.rotateLeft("S")).toStrictEqual("E");
      });
      it("Should change E to N", () => {
        expect(utils.rotateLeft("E")).toStrictEqual("N");
      });
  })

describe("rotateRight", () => {
      it("Should change N to E", () => {
        expect(utils.rotateRight("N")).toStrictEqual("E");
      });
      it("Should change E to S", () => {
        expect(utils.rotateRight("E")).toStrictEqual("S");
      });
      it("Should change S to W", () => {
        expect(utils.rotateRight("S")).toStrictEqual("W");
      });
      it("Should change W to N", () => {
        expect(utils.rotateRight("W")).toStrictEqual("N");
      });
  })