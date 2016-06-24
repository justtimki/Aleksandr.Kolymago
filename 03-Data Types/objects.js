/*jslint devel: true, nomen: true, plusplus: true, sloppy: true*/
/* =============== Objects =============== */
/**
 * Task 1
 */
var p1 = {
		'x': 10,
		'y': 5
	},
	p2 = {
		'x': 15,
		'y': 1
	};
var getDistanceBetween = (function (pointA, pointB) {
	return "Distance between points are = " +
		Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}(p1, p2));

console.log(getDistanceBetween);
