// Given a set of distinct integers, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,3], a solution is:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

const subset = (arrOfNums) => {
  let result = [];
  let backtrack = (start, chosen) => {
    result.push(chosen);
    for (let i = start; i < arrOfNums.length; i++) {
      if (chosen.includes(arrOfNums[i])) continue;
      backtrack(start + 1, chosen.concat(arrOfNums[i]))
    }
  }
  backtrack(0, [])
  return result;
}
console.log(subset([1,2,3]));