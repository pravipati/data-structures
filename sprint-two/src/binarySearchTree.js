var BinarySearchTree = function(value){
  obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};


BinarySearchTree.prototype.insert = function(value){

  var placeInTree = function(bst){
    if (bst.value > value){
      if (bst.left === null){
        bst.left = BinarySearchTree(value);
      }
      else{
        placeInTree(bst.left);
      }
    }
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
 
  var treeChecker = function(bst){
    if (bst.value === value){
      return true;
    }
    if (bst.right === null && bst.left == null){
      return false;
    } 

    if (bst.right) {
      return treeChecker(bst.right);
    }
    if (bst.left) {
      return treeChecker(bst.left);
    }
  };

  return treeChecker(this);
  
};

  
 

BinarySearchTree.prototype.depthFirstLog = function(cb){

  var eachTree = function(bst){
    cb(bst.value);
    if (bst.left){
      eachTree(bst.left);
    }
    else if (bst.right){
      eachTree(bst.right);
    }
    else{
      return;
    }
  }

  return eachTree(this);
    
    

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
