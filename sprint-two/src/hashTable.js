var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var tuple = [k,v];
  if (!bucket) {
    bucket = [];
    bucket.push(tuple);
    this._storage.set(i, bucket);
  }
  else {
    var didExist = false;
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === tuple[0]) {
        didExist = true;
        bucket[j] = tuple;
      }
      if (!didExist) {
        bucket.push(tuple)
      }
    }
  };
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k) {
      bucket[i].splice(i,1);
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
