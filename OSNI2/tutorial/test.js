[7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
.reduce(function(prev, curr, index, orig) {
    var a = orig[index - 1];
    var b = orig[index - 2];
    var c = orig[index - 3];
    if (index > 2 && a !== curr && b !== curr && c !== curr) {
        prev++;
    }
    return prev;
}, 0)

[7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
.reduce(function(prev, curr, index, orig) {

    var buffer = new Array(4);

    buffer = buffer.map(function(orig, index) {
        var a = orig[index - 1];
        var b = orig[index - 2];
        var c = orig[index - 3];
        return orig[index - (index + 1)];
    });

    if (index > 2 && a !== curr && b !== curr && c !== curr) {
        prev++;
    }
    return prev;
}, 0);