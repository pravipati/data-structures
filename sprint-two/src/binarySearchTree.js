var BinarySearchTree = function(value){
  obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};


BinarySearchTree.prototype.insert = function(value){
  var newTree = BinarySearchTree(value);
  if (newTree.value < this.value){
    var temp = this.left;
    this.left = newTree;

    if (temp) {
      if (temp > newTree.value) {
        newTree.right = temp;
      }
      else {
        newTree.left = temp;
      }
    }
  }
  else {
    var temp = this.right;
    this.right = newTree;

    if (temp) {
      if (temp > newTree.value) {
        newTree.right = temp;
      }
      else {
        newTree.left = temp;
      }
    }
  }
};

BinarySearchTree.prototype.contains = function(value){

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
