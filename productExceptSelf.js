// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Solve it without division and in O(n).

// For example, given [1,2,3,4], return [24,12,8,6].

let productExceptSelf = function(nums) {
    let result = [];
    let prod = 1;
    for (let i = 0; i < nums.length; i++){
      result[i] = prod;
      console.log('i result', i, result);
      prod *= nums[i];
      console.log('i prod', prod);
    }

    prod = 1;
    for (let j = nums.length-1; j >= 0; j--) {
      result[j] *= prod;
      console.log('j result', j, result);
      prod *= nums[j];
    }

    return result;
};

console.log(productExceptSelf([10,20,30,40]));