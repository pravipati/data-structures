var BinarySearchTree = function(value){
  obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};


BinarySearchTree.prototype.insert = function(value){
  var placeInTree = function(bst){
  //compare the BST's value to the value input we're passing in
    if (bst.value > value){
    //if the value passed in is smaller and the BST's left is empty, put the value there
      if (bst.left === null){
        bst.left = BinarySearchTree(value);
      }
      else{
        placeInTree(bst.left);
      }
    }
    //if the value passed in is bigger and BST's right is empty, put the value there
    else{
      if (bst.right === null){
        bst.right = BinarySearchTree(value);
      }
      else{
        placeInTree(bst.right);
      }
    }
  }

  return placeInTree(this);

}
      

BinarySearchTree.prototype.contains = function(value){
  //each BST has a right and a left value that either links to another BST or a null value. 
  //this means we will have to check the right and left of every BST to see if it contains our input value.
  var treeChecker = function(bst){
  //check current BST's value  
  if (bst.value === value){
    return true; //if the current BST's value is the same as our input value, we're done and can return true
  }
  //if not and the current BST has no children, then we are done and can return false for this BST
  if (bst.right === null && bst.left == null){
    return false
  }
  //if the BST has children, then we should check both it's right and left child 
  if (bst.right) {
    return treeChecker(bst.right)
  }
  if (bst.left) {
    return treeChecker(bst.left);
  }
  
};

  
    
  
  

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
