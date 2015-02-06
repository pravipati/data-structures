var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var obj = Tree(value);
  this.children.push(obj);
};

treeMethods.contains = function(target){

  var searchHelper = function(node){
    if (node.value === target){
      return true;
    }
    for (var i = 0; i < node.children.length; i++){
      if (searchHelper(node.children[i]) === true){
        return true
      }
    }
    return false;
  }
  return searchHelper(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
