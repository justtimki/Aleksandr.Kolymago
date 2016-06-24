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

var isSame = _.isEqual(charArrayOne, charArrayTwo);

console.log(isSame ? "Arrays are equal." : "Arrays are not equal.");
