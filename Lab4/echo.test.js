const exf = require('./echo');


describe("echo test", () => {
    test('prints the string s, n times, to the console', () => {
       
        console.log = jest.fn();

       
        exf("echo", 5);

       
        expect(console.log).toHaveBeenCalledTimes(5);

        for (let i = 0; i < 5; i++) {
            expect(console.log).toHaveBeenCalledWith("echo");
        }
    });
});

describe("echo JS from server", () => {
    test('prints the string s, n times, to the console', () => {
       
        console.log = jest.fn();

      
        exf("JS from server", 10) ;

     
        expect(console.log).toHaveBeenCalledTimes(10);

        
        for (let i = 0; i < 10; i++) {
            expect(console.log).toHaveBeenCalledWith("JS from server");
        }
    });
});