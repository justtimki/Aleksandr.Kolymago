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

/**
  Task 3
  */
var original = {
	'a': 5,
	'b': {
		'c': 'asd'
	}
};
var getCopy = function (original) {
	return _.cloneDeep(original);
};

console.log("Original", original, "copy", getCopy(original));

/**
 * Task 4
 */
var persons = [
	{
		firstName: "Gosho",
		lastName: "Petrov",
		age: 32
	},
	{
		firstName: "Bay",
		lastName: "Ivan",
		age: 81
	},
	{
		firstName: "Oleg",
		lastName: "Olegov",
		age: 12
	},
	{
		firstName: "Ivan",
		lastName: "Ivanov",
		age: 35
	}
];

var youngestPerson = (function (persons) {
	return _.minBy(persons, function (p) { return p.age; });
}(persons));


console.log("The Youngest Person is ", youngestPerson);

/**
 * Task 5
 */
var persons = [
	{
		firstName: "Gosho",
		lastName: "Petrov",
		age: 32,
		groupName: 'drivers'
	},
	{
		firstName: "Cay",
		lastName: "Ivan",
		age: 81,
		groupName: 'teachers'
	},
	{
		firstName: "Oleg",
		lastName: "Olegov",
		age: 12,
		groupName: 'students'
	},
	{
		firstName: "Ivan",
		lastName: "Ivanov",
		age: 35,
		groupName: 'drivers'
	},
	{
		firstName: "Bay",
		lastName: "Ivanov",
		age: 35,
		groupName: 'teachers'
	}
];
var group = function (persons, attribute) {
	return _.groupBy(_.orderBy(persons, [attribute], ['asc']), 'groupName');
};

console.log(JSON.stringify(group(persons, "firstName"), null, 2));
console.log(JSON.stringify(group(persons, "age"), null, 2));
