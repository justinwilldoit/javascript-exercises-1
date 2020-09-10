const removeFromArray = function(array, ...toRemove) {
    let modifiedArray = [...array];
    for (i = 0; i < toRemove.length; i++) {
        for (j = 0; j < modifiedArray.length; j++) {
            if (modifiedArray[j] === toRemove[i]) {
                modifiedArray.splice(j, 1);
        }
        }
    }
    return modifiedArray;
}

module.exports = removeFromArray
