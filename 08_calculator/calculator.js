const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	if(arr.length===0){
    return 0;
  };
  let sum = 0;
  arr.forEach(function(num){
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let mult =1;
  arr.forEach(function(num){
    mult *= num;
  });
  return mult;
};

const power = function(num1,num2) {
	let power=1;
  for(let i=1;i<=num2;i++){
    power *= num1;
  };
  return power;
};

const factorial = function(num1) {
	let fact=1;
  if(num1===0){
    return 1;
  };
  for(let i=1;i<=num1;i++){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
