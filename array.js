var memory = require('./memory');

var Array = function() {
    this.length = 0;
    this.ptr = memory.allocate(this.length);
};

Array.prototype.push = function(value) {
  this._resize(this.length +1);
  memory.set(this.ptr + this.length, value);
  this.length++;
};
