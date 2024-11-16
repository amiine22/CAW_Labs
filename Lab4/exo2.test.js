const last = require('./exo2');
const first = require('./exo2');
const chunk= require('./exo2');
describe("first function tests", () => {
    test("The first n elements of an array", () => {
        const array = [1, 2, 3, 4, 5];

        const result = first(array,2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });
})


describe("chunk function tests", () => {
    test("splits an array into chunks of given size", () => {
        const array = [1, 2, 3, 4, 5];
        const size = 2;
        const result = chunk(array, size);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    })})
