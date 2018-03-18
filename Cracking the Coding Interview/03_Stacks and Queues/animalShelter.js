// 3.6
// An animal shelter, which holds only dogs and cats, operates on a strictly 'first in, first out' basis. People must adopt 
// either the 'oldest' (based on arrival time) of all animals at the shelter, or they can select whether they would prefer 
// a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would 
// like. Create the data structures to maintian this system and implement operations such as enqueue, dequeueAny, dequeueDog, 
// and dequeueCat. You may use the built in LinkedList data structure.


// queue
class ShelterQ {
  constructor() {
    this.cat = [];
    this.dog = [];
    this.count = 0;
  }

  enqueue(animal) {
    this.count++;
    animal.num = this.count;
    if (animal.type === 'cat') {
      this.cat.push(animal);
    } else if (animal.type === 'dog') {
      this.dog.push(animal);
    }
  }

  dequeueAny() {
    // pick smaller num from either dog or cat
    if (this.dog[0].num  < this.cat[0].num) {
      return this.dog.shift();
    } else {
      return this.cat.shift();
    }
  }
 
  dequeueDog() {
    return this.dog.shift();
  }

  dequeueCat() {
    return this.cat.shift();
  }

}

let animals = [
  {name: 'Zoey', type: 'cat'},
  {name: 'Bandit', type: 'dog'},
  {name: 'Zip', type: 'dog'},
  {name: 'Potato', type: 'dog'},
  {name: 'Lily', type: 'cat'}
];

let myShelter = new ShelterQ();
for (let i = 0; i < animals.length; i++) {
  myShelter.enqueue(animals[i]);
}
// console.log(myShelter);
// console.log('>', myShelter.dequeueAny());
// console.log('>>', myShelter.dequeueDog());
