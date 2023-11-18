import { sumAllIntegersDivisible } from "../src/index";

describe("sumAllIntegersDivisible unit tests", () => {
    it("should return 0 when passing 1 as argument.", () => {
        expect(sumAllIntegersDivisible(1)).toBe(0);
    });
});