const reverseString = (str) => {
    const turnArray = str.split('');
    const reverseArray = turnArray.reverse();
    const joinArray = reverseArray.join('');
    return joinArray; 
}

const result = reverseString('walid');

module.exports = reverseString;