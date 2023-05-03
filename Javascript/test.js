const swapOneNumber = [1,2,4,5,6,3]
function insert(nums){
  for (var i = 1; i < nums.length; i++) {
    for (var j = i; j > 0 && j < nums.length - 1; j--){
      if ( nums[j] < nums[j-1]) {
        var temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      }
    }
  }
  return nums
  // step 4-7
}

var sorted = insert(swapOneNumber);
console.log(sorted);
