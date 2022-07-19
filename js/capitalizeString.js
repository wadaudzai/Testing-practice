const capitalize = (str) => {
    const cap = str.charAt(0).toUpperCase() + str.slice(1);
    return cap
}

module.exports = capitalize;