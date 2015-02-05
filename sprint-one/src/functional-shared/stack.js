var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  debugger;
  _.extend(stack, Stack.stackMethods);
  return stack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(value){
  this.storage[length] = value;
  this.length += 1;
}

Stack.stackMethods.pop = function(value){
  this.length -= 1;
  var results = this.storage[length];
  return results;
}

Stack.stackMethods.size = function(){
  if (this.length < 0){
    return 0;
  }
  else {
    return this.length;
  }
}

