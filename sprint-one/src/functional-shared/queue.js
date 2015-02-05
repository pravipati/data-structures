var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var length = 0;
  var front = 0;
  var storage = {};

  _.extend(storage, queueMethods);

};





var queueMethods = {};

queueMethods.size = function() {
  return length;
}


