// 4.1
// Given a directed graph, deisgn an algorithm to find out whether there is a route between two nodes.

let { Graph } = require ('./treesAndGraphs');
// methods: addNode(node), addEdge(fromNode, toNode), contains(node), removeEdge(fromNode, toNode), removeNode(node), hasEdge(fromNode, toNode)

// do bfs on both sides of graph

const routeBetweenNodes = (node1, node2, graph) => {
  let q1 = [];
  let q2 = [];
  let visited1 = {};
  let visited2 = {};

  if (graph.contains(node1)) {
    for (let eaEdge in graph.nodes[node1].edges) {
      visited1[eaEdge] = true;
      q1.push(eaEdge)
    }
  }

  while(q1.length) {
    // console.log(q1);
    let curr = q1.shift();
    // console.log(curr);
    for (let eaEdge in graph.nodes[curr].edges) {
      // console.log('curr and node2', typeof curr, typeof node2);
      if (Number(curr) === Number(node2)) {
        return true;
      }
      if (!visited1[eaEdge]) {
        visited1[eaEdge] = true;
        q1.push(eaEdge);
      }
    }
  }
  // console.log(q1);
  // console.log(q2);
  return false;
}


let myGraph = new Graph();
myGraph.addNode(1)
myGraph.addNode(7)
myGraph.addNode(2)
myGraph.addNode(3)
myGraph.addNode(4)

myGraph.addEdge(1, 7)
myGraph.addEdge(7, 2)
myGraph.addEdge(2, 4)
myGraph.addEdge(2, 3)
myGraph.addEdge(4, 7)
console.log(myGraph.nodes);

console.log(routeBetweenNodes(1, 4, myGraph));