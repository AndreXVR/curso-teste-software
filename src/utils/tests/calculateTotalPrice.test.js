const {calculateTotalPrice} = require("../validations");


describe("calculateTotalPrice()", () => {

    it('returns correct sum', () => {

        const examples = [
            {name: 'smartphone', price: 750, quantity: 2},
            {name: 'toaster', price: 45, quantity: 1},
            {name: 'pan', price: 20, quantity: 3}
        ];
    
        const expected = 1605;
        const result = calculateTotalPrice(examples);

        expect(result).toBe(expected);
    });

});

