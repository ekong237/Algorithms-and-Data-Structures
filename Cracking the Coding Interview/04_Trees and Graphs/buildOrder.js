// 4.7
// You are given a list of projects and a list of dependenies (which is a list of pairs of projects, where the second project 
// is dependent on the first project). All of a projects's dependencies must be built before the project is. Find a build 
// order that will allow the projects to be built. If there is no valid buid order, return an error.

let { Graph } = require('./treesAndGraphs');

// visit node can be installed when it is pointing to last node
// or when node doesn't depend on any other node

Graph.prototype.findNodeWithNoChild = function() {
  console.log(this.nodes);
  for (let node in this.nodes) {
    // console.log('each node', node, this.nodes[node].edges);
    let eaNodeEdge = this.nodes[node].edges;
    if (Object.keys(eaNodeEdge).length === 0) {
      return node;
    }
  }
  return undefined;
}

const buildOrder = function(graph) {
  let result = [];
  // console.log(graph.nodes);
  let currNode = graph.findNodeWithNoChild();
  console.log('node with no dependencies:', currNode);
  while(currNode !== undefined) {
    result.push(currNode);
    graph.removeNode(currNode);
    currNode = graph.findNodeWithNoChild();
    console.log('node with no dependencies:', currNode);
  }
  // console.log(result);
  return result;
}

let myGraph = new Graph();
myGraph.addNode('a');
myGraph.addNode('b');
myGraph.addNode('c');
myGraph.addNode('d');
myGraph.addNode('e');
myGraph.addEdge('a', 'd');
myGraph.addEdge('a', 'b');
myGraph.addEdge('b', 'c');
myGraph.addEdge('c', 'e');
myGraph.addEdge('b', 'e');
myGraph.addEdge('c', 'd');
// console.log(myGraph.nodes);

console.log(buildOrder(myGraph));