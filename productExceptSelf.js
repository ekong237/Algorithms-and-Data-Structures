// Remember O(n) doesn't mean just one pass. There can be more than one pass, it just has to be a fixed number of passes irrespective of how much data there is.

// E.g., 2 passes through an array still devolves to O(n). So does 3 passes.

// What can you do in multiple passes that allows you to assemble the data in a format similar to the table above, so it's tractable to calculate the final result for each index?

// Visualize the factors (the numbers to be multiplied) flattened out like the following.

// Step through, index by index, and consider how you're calculating the result. How can you gather the data in one or more previous passes through the array so you can calculate the final product for each index in a final pass?


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