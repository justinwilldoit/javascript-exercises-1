const palindromes = function(string) {
    string = string.toLowerCase();
    let array = string.split('');
    let filteredArray = array.filter(function(str) {
      return str != '!' && str != '.' && str != ',' && str != ' ';
    });
    console.log(filteredArray);
    let newString = filteredArray.join('')
    let newArray = [];
    for (i = 0; i < filteredArray.length; i++) {
      newArray.unshift(filteredArray[i]);
    }
    let reverseStr = newArray.join('');
    if (newString === reverseStr) {
      return true;
    } else {
      return false;
    }
}
module.exports = palindromes
