var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods)
  stack.length = 0;
  stack.storage = {};

  return stack;
};

var stackMethods = {};

stackMethods.size = function(){
  if (this.length < 0){
    return 0;
  }
  return this.length;
}

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length++;
}

stackMethods.pop = function(){
  this.length--;
  var result = this.storage[this.length];
  return result;
}


