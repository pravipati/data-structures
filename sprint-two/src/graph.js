

var Graph = function(){
  var obj = Object.create(Graph.prototype);

  obj.storage = [];
  obj.connections = {};

  return obj;
};

var GraphNode = function(node) {
  var obj = {};
  obj[node] = node;
  return obj;
}


Graph.prototype.addNode = function(node){
  var newNode = GraphNode(node);
  this.storage.push(newNode);
};

Graph.prototype.contains = function(node){
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node] === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][node] === node) {
      this.storage.splice(i, 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  //console.log(this.connections[fromNode].length);
  //console.log(this.connections[toNode].length);
  for (var i = 0; i < this.connections[fromNode].length; i++) {
    if (this.connections[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!(fromNode in this.connections)) {
    this.connections[fromNode] = [];
  }
  this.connections[fromNode].push(toNode)

  if (!(toNode in this.connections)) {
    this.connections[toNode] = [];
  }
  this.connections[toNode].push(fromNode);

};


Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i; i < this.connections[fromNode].length; i++) {
    if (this.connections[fromNode][i] === toNode) {
      this.connections[fromNode].splice(i,1);
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



