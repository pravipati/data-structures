var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var results = storage[front];
    delete storage[front];
    front++;
    return results;
  };

  someInstance.size = function(){
    if (size < front){
      return 0;
    } else {
      return size - front;
    }
  };

  return someInstance;
};

