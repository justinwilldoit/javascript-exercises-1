const getTheTitles = function(array) {
    newArray = [];
    for (i = 0; i < array.length; i++) {
      newArray.push(array[i].title);
    }
    return newArray;
  }

module.exports = getTheTitles;
