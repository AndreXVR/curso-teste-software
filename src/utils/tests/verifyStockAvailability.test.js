const {verifyStockAvailability} = require("../validations")


describe("verifyStockAvailability()", () => {

    it('Should return true only if stock is greater than or equal to required amount', () => {

        const expected = false;
        const result = verifyStockAvailability('smartphone', 21);

        expect(result).toBe(expected);
    });

    it('Should return true only if stock is greater than or equal to required amount', () => {

        const expected = true;
        const result = verifyStockAvailability('tablet', 14);
        
        expect(result).toBe(expected);
    });

    it('Should return true only if stock is greater than or equal to required amount', () => {

        const expected = false;
        const result = verifyStockAvailability('book', 0);
        
        expect(result).toBe(expected);
    });

    it('Should return true only if stock is greater than or equal to required amount', () => {

        const expected = false;
        const result = verifyStockAvailability('book', 1);
        
        expect(result).toBe(expected);
    });
    
    it('Should return true only if stock is greater than or equal to required amount', () => {

        const expected = false;
        const result = verifyStockAvailability('pen', 5);
        
        expect(result).toBe(expected);
    });

});
