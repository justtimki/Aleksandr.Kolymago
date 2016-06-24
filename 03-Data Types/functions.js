/*jslint devel: true, plusplus: true, sloppy: true*/
/* =============== Functions =============== */

/**
 * Task 1
 */
var getLastDigitOf = function (number) {
	number = number || 0;
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

/**
 * Task 2
 */
var getReverseNum = function (number) {
	number = number || 0;
	return number
		.toString()
		.split('')
		.reverse()
		.join('');
};

console.log("Reverse number", getReverseNum());

/**
 * Task 3
 */
var searchWord = function (text, word, isCaseSensitive) {
	var prefix = '',
		result;

	if (isCaseSensitive === undefined) {
		isCaseSensitive = true;
	}
	text = text || '';
	word = word || '';
	prefix = isCaseSensitive ? 'g' : 'ig';

	result = (text).match(new RegExp(word, prefix));

	return result.length || 0;
};

var text = "Write a function that finds all the occurrences of word in a text " +
	"The search can Case case sensitive or Case insensitive" +
	"Use function overloading",
	word = "case";
console.log(searchWord(text, word, false));

/**
 * Task 4
 */
var getDivCount = (function (webpage) {
	webpage = webpage || document;
	return function () {
		console.log("Divs on the page", webpage.getElementsByTagName('div').length);
	};
}(document)());

