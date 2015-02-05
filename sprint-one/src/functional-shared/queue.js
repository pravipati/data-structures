var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.length = 0;
  queue.front = 0;
  queue.storage = {};

  _.extend(queue, queueMethods);

  return queue;
};





var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
}

queueMethods.dequeue = function() {
  var result = this.storage[this.front];
  this.front += 1;
  return result;
}

queueMethods.size = function() {
  if (this.front > this.length) {
    return 0;
  } else {
    return this.length - this.front;
  }
}


