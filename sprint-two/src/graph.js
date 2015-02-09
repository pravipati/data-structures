
var Graph = function(){
  var obj = Object.create(Graph.prototype);
  obj.storage = {};
  return obj;
};

var GraphNode = function(value) {
  var obj = {};
  obj.value = value;
  obj.edges = {};
  return obj;
};


Graph.prototype.addNode = function(node){
  var newNode = GraphNode(node);
  this.storage[newNode.value] = newNode;
};

Graph.prototype.contains = function(node){
  return node in this.storage;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return toNode in this.storage[fromNode].edges;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = toNode;
  this.storage[toNode].edges[fromNode] = fromNode;
};


Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var node in this.storage) {
    cb(node);
  }
};
