const strLength = (str) => {
    const lengthOf = str.length;
    if(lengthOf > 1 && lengthOf < 10){
        return lengthOf;   
    } else {
        return 'No';
    }
}

strLength('ahm');

module.exports = strLength;