const strLength = require('./stringLength')

test ('Check string length', () => {
    expect(strLength('walid')).toBe(5)
})

test ('check for character count', () => {
    expect(strLength('lksadjfsda;dsf')).toBe('No')
})