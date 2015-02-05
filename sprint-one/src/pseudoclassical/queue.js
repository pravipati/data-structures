var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.tail = 0;
  this.head = 0;
  this.storage = {};

};

Queue.prototype.size = function(){
  if(this.head > this.tail){
    return 0;
  }
  return this.tail - this.head;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
}

Queue.prototype.dequeue = function(){
  var result = this.storage[this.head];
  this.head++;
  return result;
}

