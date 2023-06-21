const assert = require('chai').assert;

const testController = require('../controllers/test.controller');

describe("Test about test controller", function () {
    describe("Tests addition", function () {
        it("Tests addition of function", function () {
            let result = testController.add(5, 4);
            assert.equal(result, 9)
        })
        it("Tests subtraction of function", function () {
            let result = testController.sub(3, 1);
            assert.equal(result, 2)
        })
    })
});