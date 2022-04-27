const leapYears = function(year) {

    //define divisions
    let div100 = year%100===0;
    let div400 = year%400===0;
    let div4 = year%4===0;

    //conditionals
    if(div400){
        return true;
    }else if(div100){
        return false;
    }else if(div4){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
