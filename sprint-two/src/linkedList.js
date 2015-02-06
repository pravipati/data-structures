var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // store new node in variable
    var node = Node(value);
    //if list.tail == null
    if (list.tail === null){
    //assign list.tail to Node
      list.tail = node;
      list.head = node;
    }
    //if list.tail already has a node, change list.tail's next value to node
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function(){
    if (list.head){
      var result = list.head;
      list.head = list.head.next;
      return result.value;
    }

  };

  list.contains = function(target){

    var nodeSearch = function(node) {
      // if node === null return false
      if (node.next === null) {
        return node.value === target;
      }
      // debugger;
      if (node.value === target) {
        return true;
      }
      return nodeSearch(node.next);
      //
      //
    };

    return nodeSearch(list.head);
  };

  return list;
};



var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
