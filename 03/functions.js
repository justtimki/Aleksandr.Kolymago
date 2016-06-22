/* =============== Functions =============== */

/**
  * Task 1
  */
var getLastDigitOf = function(number) {
    var numberLenght = (number).toString().length;
    var lastNumber = (number).toString()[numberLenght - 1];
    switch (lastNumber) {
        case '0':
            return 'zero';
            break;
        case '1':
            return 'one';
            break;
        case '2':
            return 'two';
            break;
        case '3':
            return 'three';
            break;
        case '4':
            return 'four';
            break;
        case '5':
            return 'five';
            break;
        case '6':
            return 'six';
            break;
        case '7':
            return 'seven';
            break;
        case '8':
            return 'eight';
            break;
        case '9':
            return 'nine';
            break;
    }
};

console.log(getLastDigitOf(1024));

/**
  * Task 2
  */
var getReverseNum = function(number) {
    var result = "";
    var array = (number).toString().split("").reverse();
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return parseInt(result);
};

console.log(getReverseNum(123));

/**
  * Task 3
  */
var searchWord = function(text, word, isCaseSensitive) {
    var prefix = '';
    if (isCaseSensitive !== undefined && isCaseSensitive) {
        prefix = 'g';
    } else {
        prefix = 'ig';
    }
    var result = (text).match(new RegExp(word, prefix));
    if (result === null) {
        return 0;
    }

    return result.length;
};

var text = "Write a function that finds all the occurrences of word in a text " +
    "The search can Case case sensitive or Case insensitive" +
    "Use function overloading",
    word = "case";

console.log(searchWord(text, word, true));

/**
  * Task 4
  */
var getDivCount = function() {
    return document.getElementsByTagName('div').length;
};

console.log(getDivCount());
