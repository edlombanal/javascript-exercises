const sumAll = function(num1,num2) {

    //error tests
    if(isNaN(num1) || isNaN(num2)){
        return 'ERROR';
    };
    if(num1<0 || num2<0){
        return 'ERROR';
    };
    if(typeof(num1)==="string" || typeof(num2)==="string"){
        return 'ERROR';
    };

    //variable definition
    let first = Math.min(num1,num2);
    let second = Math.max(num1,num2);
    let total = 0;

    //loop
    for(let i = first; i<=second; i++){
        total +=i;
    };

    return total;
};


// Do not edit below this line
module.exports = sumAll;
