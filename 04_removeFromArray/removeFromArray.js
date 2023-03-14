const removeFromArray = function(arr, ...allTheNums) {
   let results = [];
   for(let i = 0; i < arr.length; i++) {
    if (allTheNums.includes(arr[i])) { 
      continue; 
    } else {
      results.push(arr[i])
   }
  }
   return results;
};

// Do not edit below this line
module.exports = removeFromArray;
