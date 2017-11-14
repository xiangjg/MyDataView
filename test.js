Array.prototype.shuffle = function() {
    for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
    return this;
};
var arr = new Array();
arr.push({id:1});
arr.push({id:2});
arr.push({id:3});
arr.push({id:4});
console.log(arr);
arr.shuffle();
console.log(arr);


