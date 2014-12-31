// CREATE ARRAY 1 TO 5
var nums = Array.apply(null, Array(5)).map(function(_, i) {
    return i;
});

// CREATE 
var result = nums.reduce(function(prev, val) {
    console.log(prev, val);
    prev = prev.push(val);
    console.log(prev, val);
    return prev;
}, []);

console.log(result);
