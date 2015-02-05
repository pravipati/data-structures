var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  //debugger;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.length] = value;
  this.length += 1;
}

stackMethods.pop = function(){
  this.length -= 1;
  var result = this.storage[this.length];
  return result;
}

stackMethods.size = function(){
  if (this.length < 0){
    return 0;
  }
  else {
    return this.length;
  }
}

