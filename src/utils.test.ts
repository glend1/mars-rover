import * as utils from './utils';
 
describe("createPlateau", () => {
    it("Should return an array of 1 length", () => {
      expect(utils.createPlateau(1)).toStrictEqual([[""]]);
    });
    it("Should return an array of 5 length", () => {
      expect(utils.createPlateau(5)).toStrictEqual([["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]);
    });
  });