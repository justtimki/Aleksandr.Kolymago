/*jslint devel: true, plusplus: true, sloppy: true*/
/* =============== Strings =============== */

/**
 * Task 1
 */
var reverseString = function (string) {
	string = string || '';
	return string.split('').reverse().join('');
};

console.log(reverseString('Hello'));

/**
 * Task 2
 */
var expression = '(a+b))';

var isBracketsCorrectly = function (expression) {
	expression = expression || '';
	var i,
		count = 0;
	if (expression[0] === ')') {
		return false;
	}
	for (i = 0; i < expression.length; i++) {
		if (expression[i] === '(') {
			count++;
		}
		if (expression[i] === ')') {
			count--;
		}
	}
	return (count === 0);
};
console.log("Expression", expression, "is", isBracketsCorrectly(expression));
