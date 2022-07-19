const capitalize = require('./capitalizeString');

test('check if the letter is capitalized', () => {
    expect(capitalize('walid')).toBe('Walid');
})