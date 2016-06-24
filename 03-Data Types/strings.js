/*jslint devel: true, plusplus: true, sloppy: true*/
/* =============== Strings =============== */

/**
 * Task 1
 */
var reverseString = function (string) {
	return string.split('').reverse().join('');
};

console.log(reverseString('Hello'));
