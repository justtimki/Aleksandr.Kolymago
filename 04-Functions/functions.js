/*jslint devel: true, plusplus: true, sloppy: true*/
/* =============== Functions =============== */

/**
 * Task 1
 */
console.log("Task 1, concatenation: ");
console.log(conc("1", "1"));
console.log(conc(1, 1));
console.log("=======================");

function conc(a, b) {
	a = a + "" || "";
	b = b + "" || "";
	return a + b;
}

/**
 * Task 2
 */
var comp = function (a, b) {
	return _.eq(a, b) ? 1 : -1;
};
console.log("Task 2, compare can't call before declatation, because it's hoisting: ");
console.log(comp("abc", "abc"));
console.log(comp("abC", "abc"));
console.log("=======================");


/**
 * Task 3
 */

document.getElementById('btn').onclick = function () {
	console.log("Task 3, anonymous function: ");
	console.log("message in console");
	console.log("=======================");
};

/**
 * Task 4
 */
var fibo = function (n) {
	var a = 1,
		b = 1,
		i,
		c;
	for (i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
};

console.log("Task 4, fibonachi: ");
console.log(fibo(77));
console.log("=======================");

/**
 * Task 5
 */
var conc = (function (a, b) {
	var result;
	a = a + '' || '';
	b = b + '' || '';
	result = a + b;
	console.log("Task 5, immediately-invoked function expression: ");
	console.log(result);
	console.log("=======================");
	return result;
}(1, 1));

/**
 * Task 6
 */
var parts = function () {
	var i,
		found,
		result = [];
	for (i = 0; i < arguments.length; i++) {
		found = _.trim(arguments[i].match(/:.*?\./g), /.&:/).trim();
		result = result.concat(found);
	}
	return result;
};

console.log("Task 6, several arguments: ");
console.log(parts("This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.", "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."));
console.log("=======================");


/**
 * Task 7
 */
var find = function (textString, test) {
	textString = textString || '';
	test = test || textString;

	return textString.indexOf(test);
};
console.log("Task 7, Optional Arguments: ");
console.log(find("abc", "b"));
console.log(find("abc"));
console.log(find("abc", "d"));
console.log(find("abc", "a", "b"));
console.log("=======================");

/**
 Task 8
 */
var str = function (textString) {
//	str.isNonEmptyStr = function (param) {
//		return ((param === "") || (param === undefined) || (typeof param === "string") ? false : true);
//	};

	if(str.isNonEmptyStr(textString)) {
		alert("String is non empty");
	} else {
		alert("String is empty");
	}
};

str.isNonEmptyStr = function (param) {
		return ((param === "") || (param === undefined) || (typeof param !== "string") ? false : true);
	};
console.log("Task 8, Function as an Object: ");
console.log(str.isNonEmptyStr());
console.log(str.isNonEmptyStr(""));
console.log(str.isNonEmptyStr("a"));
console.log(str.isNonEmptyStr(1));
str();
str("a");
console.log("=======================");

/**
 * Task 9
 */
function toConsole(obj) {
	console.log(obj);
}

function toAlert(obj) {
	alert(obj);
}

function splitToWords(message, callback) {
	if (_.isUndefined(callback)) {
		return _.words(message);
	}
	callback(_.words(message));
}

console.log("Task 9, Function as a Parameter: ");
splitToWords("My very long text msg", toConsole);
splitToWords("My very long text msg", toAlert);
console.log(splitToWords("My very long text msg"));
console.log("=======================");

/**
 * Task 10
 */
function copyright() {
//	that = this;
	var copyrightSign = '\u00A9';
	return (function (param) {
		return copyrightSign + param;
	});
}
console.log("Task 10, Function as a Result: ");
console.log(copyright()("EPAM"));
console.log("=======================");

/**
 * Task 11
 */
var Employee = {
	name: "Ann",
	work: function () {
		console.log("I am " + this.name + ". I am working...")
	}
};

console.log("Task 11, Function as a Method: ");
Employee.work();
console.log("=======================");
