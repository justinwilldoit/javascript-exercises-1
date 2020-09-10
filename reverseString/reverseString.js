const reverseString = function(string) {
    string = string.split('');
    let array = [];
    for (i = 0; i < string.length; i++) {
        array.unshift(string[i]);
    }
    return array.join('');
}

module.exports = reverseString
