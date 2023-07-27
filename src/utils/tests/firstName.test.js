const {firstName} = require("../validations");


describe("firstName()", () => {

    it('Should only return first name when input is a full name', () => {

        const expected = 'Joaquim';
        const result = firstName('  Joaquim         Jose da     Silva Xavier    ');
        expect(result).toBe(expected);
    });

});
