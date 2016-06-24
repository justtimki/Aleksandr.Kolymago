/*jslint devel: true, plusplus: true, sloppy: true*/
/* =============== Functions =============== */

/**
 * Task 1
 */
var getLastDigitOf = function (number) {
	var numberLenght = (number).toString().length,
		lastNumber = (number).toString()[numberLenght - 1];
	switch (lastNumber) {
	case '0':
		return 'zero';
	case '1':
		return 'one';
	case '2':
		return 'two';
	case '3':
		return 'three';
	case '4':
		return 'four';
	case '5':
		return 'five';
	case '6':
		return 'six';
	case '7':
		return 'seven';
	case '8':
		return 'eight';
	case '9':
		return 'nine';
	default:
		return 'not a number';
	}
};

console.log("The last digit of", 1024, "integer is", getLastDigitOf(1024));
