function add () {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
		
	}
	return sum;
}

function subtract () {
		let sum;
		for (let i = 1; i < arguments.length; i++) {
			sum = arguments[0];
			sum -= arguments[i];
			
		}
		return sum;
	}

function sum (array) {
	let sum = 0;
	console.log(array);
	if (array.length === 0) {
		return 0;
	}
	for (let i = 0; i < array.length; i++) {
	sum += array[i];
	}
	return sum;
}

function multiply (array) {
	let sum = 1;
  console.log(array)
	for (let i = 0; i < array.length; i++) {
		sum *= array[i];
	}
	return sum;
  console.log(sum);
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	let sum = 1;
	let array = [];
  if (num === 0) {
    return 1;
  }
  for (i = num; i > 0; i--) {
		array.push(i);
	}
	for (j = 0; j < array.length; j++) {
		sum *= array[j];
	}
  return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}