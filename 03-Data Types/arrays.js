/*jslint devel: true, nomen: true, plusplus: true, sloppy: true*/
/* =============== Arrays =============== */

/**
 * Task 1
 */
var array = (function () {
	console.log(_.range(20).map(function (o, i) { return i * 5; }));
}());

/**
 * Task 2
 */
var charArrayOne = ['a', 'b', 'c'],
	charArrayTwo = ['c', 'd', 'e'],
	charArrayThree = ['a', 'b', 'c'];

var isSame = function (charArrayOne, charArrayTwo) {
	charArrayOne = charArrayOne || [];
	charArrayTwo = charArrayTwo || [];
	return _.isEqual(charArrayOne, charArrayTwo);
};

console.log(isSame(charArrayOne, charArrayTwo) ? "Arrays are equal." : "Arrays are not equal.");

/**
 * Task 3
 */
var sourceArray = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

var getMaxSequenceOf = function (array, option) {
	array = array || [];
	var repeatCount = 0,
		repeatStartPos,
		repeatEndPos,
		resultArray = [],
		i;
	for (i = 0; i < array.length; i++) {
		if (option(array[i], array[i + 1])) {
			if (repeatCount === 0) {
				repeatStartPos = i;
			}
			repeatCount++;
		} else {
			repeatEndPos = i + 1;
			if (repeatCount >= resultArray.length) {
				resultArray = array.slice(repeatStartPos, repeatEndPos);
			}
			repeatCount = 0;
		}
	}
	return resultArray;
};

console.log("Maximal sequence of equal elements", getMaxSequenceOf(sourceArray, function (a, b) { return a === b; }));

/**
 * Task 4
 * In this task I reuse my fuction from task 3.
 */
var sourceArray = [3, 2, 3, 4, 2, 2, 4];
console.log("Maximal increasing sequence", getMaxSequenceOf(sourceArray, function (a, b) { return (b - a) === 1; }));
