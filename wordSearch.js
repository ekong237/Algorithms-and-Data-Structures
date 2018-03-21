// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// For example,
// Given board =

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

const wordSearch = (grid, word) => {
  var hash = {};

  const dfs = (w, i, j) => {
    let key = i + ',' + j;
    if (hash[key]) {
      return false;
    }
    if (w === word.length) {
      return true;
    }
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return false;
    }
    let result = false;

    if (grid[i][j] === word[w]) {
      // console.log('key', key);
      hash[key] = true;
      result = dfs(w+1, i+1, j)
               || dfs(w+1, i, j+1)
               || dfs(w+1, i-1, j)
               || dfs(w+1, i, j-1)
      hash[key] = false;
    }
    return result;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (dfs(0, i, j)) {
        return true;
      }
    }
  }

  return false;
}

let grid = [
  ['A','E','C','E'],
  ['S','E','C','S'],
  ['A','D','E','E']
];
console.log(wordSearch(grid, 'SEE'));