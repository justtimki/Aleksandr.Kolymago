/*jslint devel: true, nomen: true, plusplus: true, sloppy: true*/
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


/**
 * Task 4
 */
var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow <lowcase>anything</lowcase> submarine</upcase>.' +
	' We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
var test = '<upcase>yellow <lowcase>anything</lowcase> submarine</upcase>.';

var stringToHtml = function (str) {
	var template = document.createElement('template');
	template.innerHTML = str;

	return template.content.childNodes;
};

var convertWord = function (word, tagName) {
	var mixcase = 'mixcase'.toUpperCase(),
		lowcase = 'lowcase'.toUpperCase(),
		upcase = 'upcase'.toUpperCase(),
		letters = [],
		i;

	switch (tagName) {
	case mixcase:
		letters = word.split('');
		for (i = 0; i < word.length; i++) {
			if (_.random(0, 1) === 0) {
				letters[i] = letters[i].toLowerCase();
			} else {
				letters[i] = letters[i].toUpperCase();
			}
		}
		word = _.join(letters, '');
		break;
	case upcase:
		word = word.toUpperCase();
		break;
	case lowcase:
		word = word.toLowerCase();
		break;
	}

	return word;
};

var beautifyText = function (html) {
	var i,
		j,
		node,
		innerNode,
		result = "",
		allElements = stringToHtml(html);

	console.log(text);
	for (i = 0; i < allElements.length; i++) {
		node = allElements.item(i);
		if (node.childNodes.length > 1) {
			for (j = 0; j < node.childNodes.length; j++) {
				innerNode = node.childNodes.item(j);
				if (innerNode.nodeType === Node.TEXT_NODE) {
					result += convertWord(innerNode.textContent, node.tagName);
				} else {
					result += convertWord(innerNode.textContent, innerNode.tagName);
				}
			}
		} else {
			result += convertWord(node.textContent, node.tagName) || '';
		}
	}
	return result;
};

console.log(beautifyText(text));


/**
 * Task 5
 */
var text = 'Write a function that replaces non breaking white-spaces in a text with `&nbsp;`';
var modifyText = function (text) {
	text = text || '';
	return _.replace(text, /\s+/g, '&nbsp;');
};

console.log(modifyText(text));

/**
 * Task 6
 */
var text = '<html> <head> <title>Sample site</title> </head> <body> <div>text<div>more text</div>and more...</div>in body </body> </html>';
var extractWords = (function (text) {
	return text.replace(/<(?:.|\n)*?>/ig, '');
}(text));

console.log(extractWords);

/**
 * Task 7
 */
var urlToParse = 'http://www.tut.by/forum/index.php';
var parseUrl = function (url) {
	var parser = document.createElement('a');
	parser.href = url;

	return {
		protocol:  parser.protocol,
		server: parser.hostname,
		resource: parser.pathname
	};
};

console.log(JSON.stringify(parseUrl(urlToParse), null, 2));
