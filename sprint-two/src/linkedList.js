var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var key = 0;

  list.addToTail = function(value){
    // store new node in variable
    var node = Node(value);
    //if list.tail == null
    if (list.tail === null){
    //assign list.tail to Node
      list.tail = node;
      list.head = node;
      list[key] = node;
      key++;
    }
    //if list.tail already has a node, change list.tail's next value to node
    list.tail.next = node;
    list.tail = node;
    list[key] = node;
    key++;
  };

  list.removeHead = function(){
    if (list.head){
      var result = list.head;
      list.head = list.head.next;
      console.log(result.key);
      delete list[result.key]
      return result.value;
    }

  };

  list.contains = function(target){
    for (var key in list) {
      if (list[key].value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};



var Node = function(value){
  var node = {};
  var key = this.key
  node.key = key;
  node.value = value;
  node.next = null;


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
