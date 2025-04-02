import { assert } from "chai";
import { describe, it } from "mocha";
// import  fibonacci  from "./fibonacci.js";


describe('fibonacci', ()=> {
    it("Should return 0 for fibonacci(0)",()=> {
        assert.strictEqual(fibonacci(0),0);
    });
});
