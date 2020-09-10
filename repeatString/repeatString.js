const repeatString = function(string, occurences) {
    let result = [];
    if (occurences < 0) {
        return 'ERROR';
    }
    for (i = 0; i < occurences; i++) {
        result.push(string);
    }
    return result.join('');
}

module.exports = repeatString
