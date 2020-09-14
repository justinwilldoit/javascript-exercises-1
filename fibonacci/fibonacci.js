const fibonacci = function(num) {
    num = parseInt(num);
    let fibArray = [1, 1];
    if (num < 0) {
      return 'OOPS'
    }
    for (i = 2; i < num; i++) {
      fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[num-1];
    }
    
module.exports = fibonacci
