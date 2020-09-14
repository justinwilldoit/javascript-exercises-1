const caesar = function(str, shift) {
    shift = shift % 26;
    let lowerCaseStr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';

    for (i = 0; i < lowerCaseStr.length; i++) {
        let currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ' || currentLetter === '!' || currentLetter === '.' || currentLetter === ',') {
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        newIndex = currentIndex + shift;
        if (newIndex > 25) {
            newIndex = newIndex - 26;
        } if (newIndex < 0) {
            newIndex = newIndex + 26;
        } if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        } else {
            newStr += alphabet[newIndex];
        }
    }
    return newStr;
}

module.exports = caesar
