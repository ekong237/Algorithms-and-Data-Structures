/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

 // hashing function
 var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
// console.log(getIndexBelowMaxForKey('dog', 20));

class HashTable {
  constructor(max) {
    this.max = max;
    this.hashTable = new Array(max);
  }

  insert(key, val) {
    const insertIndex = getIndexBelowMaxForKey(key, this.max);

    let bucket = this.hashTable[insertIndex] || [];
    let tuples = [key, val];
    bucket.push(tuples);
    this.hashTable[insertIndex] = bucket;

  }

  retrieve(key) {
    const insertIndex = getIndexBelowMaxForKey(key, this.max);

    let bucket = this.hashTable[insertIndex];
    if (bucket.length === 1) {
      return bucket[0][1];
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }

  remove(key) {
    const insertIndex = getIndexBelowMaxForKey(key, this.max);

    let bucket = this.hashTable[insertIndex];
    if (bucket.length === 1) {
      delete bucket[0];
    } else {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          delete bucket[i];
        }
      }
    }
  }
}

let myTable = new HashTable(5);
myTable.insert('dog', 'bone');
myTable.insert('die', 'four');
console.log(myTable.retrieve('die'));
myTable.remove('die')
console.log('--');
console.log(myTable.hashTable);


