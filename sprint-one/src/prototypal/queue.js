var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.front = 0;
  queue.length = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.size = function(){
  if (this.front > this.length){
    return 0;
  }
  return this.length - this.front;
}

queueMethods.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
}

queueMethods.dequeue = function(){
  var result = this.storage[this.front];
  this.front++;
  return result;
}


