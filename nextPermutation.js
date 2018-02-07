// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place, do not allocate extra memory.
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

const nextPermutation = (nums) => {
  let index = null;
  for (let i = nums.length-1; i > 0; i--) {
    let current = nums[i];
    let prev = nums[i-1];
    if (prev < current) {
      index = i-1;
      break;
    }
  }
  for (let j = nums.length-1; j > 0; j--) {
    let current = nums[j];
    if (current > nums[index]) {
      [nums[j], nums[index]] = [nums[index], nums[j]];
      break;  
    }
  }
  if (index === null) {
    nums = nums.slice().reverse()
  } else {
    nums = nums.slice(0,index+1).concat(nums.slice(index+1).reverse())
  }
  console.log(nums);
}

nextPermutation([1, 3, 2]); //[2, 1, 3]
nextPermutation([0, 1, 2, 5, 3, 3, 0]); // [0, 1, 3, 0, 2, 3, 5]