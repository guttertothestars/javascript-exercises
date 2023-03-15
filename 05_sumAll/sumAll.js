const sumAll = function(num1, num2) {
  //SETUP: initialize sum, determine start and end, throw errors for edge cases
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (!Number.isInteger(num1) || !Number.isInteger(num2) ) return 'ERROR';
    
    let sum = 0;
    let start = 0;
    let end = 0;
  
    if (num1 > num2) {
        start = num2;
        end = num1;
    } else {
        start = num1;
        end = num2;
    }
  
  //I can't believe javascript doesn't have a simple range function
    let range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  
  //loop using range array to add to sum
    for(let i = 0; i < range.length; i++) {
      sum += range[i];
    }
    return sum;
  };
  
  // Do not edit below this line
  module.exports = sumAll;
  
