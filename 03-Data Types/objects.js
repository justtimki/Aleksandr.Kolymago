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
	},
	lineA = {
		'pointA': { 'x': 1, 'y': 1 },
		'pointB': { 'x': 1, 'y': 4 }
	},
	lineB = {
		'pointA': { 'x': 1, 'y': 1 },
		'pointB': { 'x': 3, 'y': 1 }
	},
	lineC = {
		'pointA': { 'x': 3, 'y': 1 },
		'pointB': { 'x': 1, 'y': 4 }
	};

var getDistanceBetween = function (pointA, pointB) {
	return "Distance between points are = " +
		Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
};

console.log(getDistanceBetween(p1, p2));

var canFormTriangle = function (lineA, lineB, lineC) {
	var a, b, c;
	a = getDistanceBetween(lineA.pointA, lineA.pointB);
	b = getDistanceBetween(lineB.pointA, lineB.pointB);
	c = getDistanceBetween(lineC.pointA, lineC.pointB);
	console.log(a, b, c);
	if ((a + b > c) && (a + c > b) && (b + c > a)) {
		return "Lines can form triangle";
	} else {
		return "Lines can't form triangle";
	}
};

console.log(canFormTriangle(lineA, lineB, lineC));

/**
  Task 2
  */
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];

arr.remove = function (element) {
	return _.pull(arr, element);
};
console.log(arr.remove(1));
