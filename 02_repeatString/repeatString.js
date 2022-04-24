const repeatString = function(str,num) {
    let repeat = '';
    if(num>=0){
        for(let i=1; i<=num; i++){
            repeat += str;
        };
        return repeat;
    }else{
        return 'ERROR';
    };
};

// Do not edit below this line
module.exports = repeatString;
