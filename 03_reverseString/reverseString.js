const reverseString = function(str) {
    let strArr = str.split('');
    let strLen = strArr.length;
    let newStr = '';
    for(let i = strLen - 1; i>=0; i--){
        newStr += strArr[i];
    };
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
