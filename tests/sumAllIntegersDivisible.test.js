import { sumAllIntegersDivisible } from "../src/index";

describe("sumAllIntegersDivisible unit tests", () => {
    it("should return 0 when passing 1 as argument.", () => {
        expect(sumAllIntegersDivisible(1)).toBe(0);
    });

    it("should return 0 when passing 2 as argument.", () => {
        expect(sumAllIntegersDivisible(2)).toBe(0);
    });

    it("should return 0 when passing 3 as argument.", () => {
        expect(sumAllIntegersDivisible(3)).toBe(0);
    });

    it("should return 3 when passing 4 as argument.", () => {
        expect(sumAllIntegersDivisible(4)).toBe(3);
    });

    it("should return 3 when passing 5 as argument.", () => {
        expect(sumAllIntegersDivisible(5)).toBe(3);
    });

    it("should return 8 when passing 6 as argument.", () => {
        expect(sumAllIntegersDivisible(6)).toBe(8);
    });

    it("should return 14 when passing 7 as argument.", () => {
        expect(sumAllIntegersDivisible(7)).toBe(14);
    });

    it("should return 14 when passing 8 as argument.", () => {
        expect(sumAllIntegersDivisible(8)).toBe(14);
    });

    it("should return 14 when passing 9 as argument.", () => {
        expect(sumAllIntegersDivisible(9)).toBe(14);
    });

    it("should return 23 when passing 10 as argument.", () => {
        expect(sumAllIntegersDivisible(10)).toBe(23);
    });

    it("should return 33 when passing 11 as argument.", () => {
        expect(sumAllIntegersDivisible(11)).toBe(33);
    });

    it("should return 2318 when passing 100 as argument.", () => {
        expect(sumAllIntegersDivisible(100)).toBe(2318);
    });

    it("should return 233168 when passing 1000 as argument.", () => {
        expect(sumAllIntegersDivisible(1000)).toBe(233168);
    });

    it("should return 23331668 when passing 10000 as argument.", () => {
        expect(sumAllIntegersDivisible(10000)).toBe(23331668);
    });

    it("should return 2333316668 when passing 100000 as argument.", () => {
        expect(sumAllIntegersDivisible(100000)).toBe(2333316668);
    });

    it("should return 233333166668 when passing 1000000 as argument.", () => {
        expect(sumAllIntegersDivisible(1000000)).toBe(233333166668);
    });
});