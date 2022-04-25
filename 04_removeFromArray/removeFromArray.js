const removeFromArray = function(Arr,...removeFromArr) {
    let mainArr = Arr;
    let index;
    for(let i=0; i<removeFromArr.length; i++){
        index = mainArr.findIndex(pos => pos===removeFromArr[i]);
        if(index!==-1){
            mainArr.splice(index,1);
        };
    };
    return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
