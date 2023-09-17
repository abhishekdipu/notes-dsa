class Node {
  constructor(label) {
    this.label = label;
  }
}

class Graph {
  constructor() {
    this.nodes = {}; //{label : node}
    this.adjacencyList = {}; //{node : [node1, node2]}
  }

  // adding an node/vertex
  addNode(label) {
    const node = new Node(label);
    if (!this.nodes[label]) this.nodes[label] = node;
    if (!this.adjacencyList[node]) this.adjacencyList[node] = new Set(); //here we'll store upcoming connected nodes
  }

  //adding an edge/connection
  addEdge(from, to) {
    const fromNode = this.nodes[from];
    if (!fromNode) return "not valid";

    const toNode = this.nodes[to];
    if (!toNode) return "not valid";

    this.adjacencyList[fromNode].add(toNode);
  }

  // print
  print() {
    console.log(this.nodes);
    console.log(this.adjacencyList);
    for (let source in this.adjacencyList) {
      const targets = this.adjacencyList[source];
      if (targets) console.log(`${source} is connected to ${targets}`);
    }
  }

  //removing node or vertex
  removeNode(label) {
    const node = this.nodes[label];
    if (!node) return;

    for (let key in this.adjacencyList) {
      this.adjacencyList[key].delete(node);
    }

    delete this.adjacencyList[node];
    delete this.nodes[label];
  }

  //removing edge/connection
  removeEdge(from, to) {
    const fromNode = this.nodes[from];
    const toNode = this.nodes[to];
    if (!fromNode || !toNode) return;

    this.adjacencyList[fromNode].delete(toNode);
  }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
// graph.removeNode("A");
graph.print();
