// Graph Implementation
// Adjacency List
// store nodes and edges in objects
// undirected, two way
// directed, one way

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || {edges: {}};
    // add new node
      // if exists, dont add again; 
      // otherwise add node as key, with value being edges {}
  }

  addEdge(fromNode, toNode) {
    // add edge to from node AND to node
    this.nodes[fromNode].edges[toNode] = true;
    // this.nodes[toNode].edges[fromNode] = true;
  }

  contains(node) {
    return Boolean(this.nodes[node]);
  }

  removeEdge(fromNode, toNode) {
    delete this.nodes[fromNode].edges[toNode];
    // delete this.nodes[toNode].edges[fromNode];
  }

  removeNode(node) {
    // go to node, check all edges, then remove node
    for (let targetNode in this.nodes[node].edges) {
      this.removeEdge(targetNode, node);
    }
    delete this.nodes[node];
  }

  hasEdge(fromNode, toNode) {
    return Boolean(this.nodes[fromNode].edges[toNode]);
  }  

  forEachNode(cb) {
    for (let node in this.nodes) {
      cb(node)
    }
  }

}

// let myGraph = new Graph();
// myGraph.addNode(3)
// myGraph.addNode(5)
// myGraph.addNode(7)
// myGraph.addEdge(3, 5)
// myGraph.addEdge(5, 7)
// myGraph.addEdge(7, 3)
// myGraph.removeEdge(7,3)
// myGraph.removeNode(7)
// console.log(myGraph.contains(7));
// console.log(myGraph.hasEdge(3, 7));
// console.log(myGraph.hasEdge(7, 3));

// connect everything to node 5
// myGraph.forEachNode((node) => {
//     myGraph.addEdge(node, 5);  
// })
// console.log(myGraph.nodes);

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    // let currNode = this;
    let newNode = new BST(val);
    if (val > this.value) {
      // goes on right
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(val)
      }
    } else {
      // goes on left
      if (!this.left) {
        this.left = newNode;
      } else {
       this.left.insert(val)
      }
    }
  }
}

// let myBST = new BST(6);
// myBST.insert(3)
// myBST.insert(2)
// myBST.insert(9)
// myBST.insert(11)
// console.log(myBST);

module.exports.Graph = Graph;
module.exports.BST = BST;










