const generateUniqueId = require('../../src/utils/generateUniqueId');


describe('Generate Unique ID', () => {
    it('Shoud generate as unique id ', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});