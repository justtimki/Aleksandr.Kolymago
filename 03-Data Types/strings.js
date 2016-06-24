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

/**
 * Task 3
 */
var text = "We are liv<b>in</b>g **in** an yellow submar<b>in</b>e." +
	" We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight." +
	" So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.",
	targer = 'in';
var searchWord = function (text, target) {
	text = text || '';
	target = target || '';
	return text.match(new RegExp(target, 'ig')).length || 0;
};

console.log("The word '", targer, "' found:", searchWord(text, targer), "times");
