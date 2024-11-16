const mean = require('./notation');

describe("mean function tests", () => {
    test("calculates the mean of a non-empty array", () => {
        const scores = [90, 80, 70, 60, 50];
        const result = mean(scores);
        expect(result).toBe(70);
    });

})
describe("mean function tests", () => {
    test("calculates the mean of empty array", () => {
        const scores = [];
        const result = mean(scores);
        expect(result).toBe(0);
    });

})
describe("mean function tests", () => {
    test("calculates the mean of a single element array", () => {
        const scores = [90];
        const result = mean(scores);
        expect(result).toBe(90);
    });

})

