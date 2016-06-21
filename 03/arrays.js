/* =============== Arrays =============== */

/**
 * Task 1
 */

var array = [];
for (var i = 0; i < 20; i++) {
    array[i] = i * 5;
}
console.log(array);

/**
 * Task 2
 */
var charArrayOne = ['a', 'b', 'c'],
    charArrayTwo = ['c', 'd', 'e'];

var isSame = function(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    for (var i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}

console.log(isSame(charArrayOne, charArrayOne));

/**
 * Task 3
 */

var sourceArray = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

var getMaxSequenceOf = function(array) {
    var repeatCount = 0,
        repeatStartPos,
        repeatEndPos,
        resultArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            if (repeatCount === 0) {
                repeatStartPos = i;
            }
            repeatCount++;
        } else {
            repeatEndPos = i + 1;
            if (repeatEndPos - repeatStartPos >= resultArray.length && repeatCount > 0) {
                resultArray = array.slice(repeatStartPos, repeatEndPos);
            }
            repeatCount = 0;
        }
    }
    return resultArray;
}
console.log(getMaxSequenceOf(sourceArray));

/**
 * Task 4
 */

var sourceArray = [3, 2, 3, 4, 2, 2, 4];

var getMaxIncSequenceOf = function(array) {
    var repeatCount = 0,
        repeatStartPos,
        repeatEndPos,
        resultArray = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i + 1] - array[i]) === 1) {
            if (repeatCount === 0) {
                repeatStartPos = i;
            }
            repeatCount++;
        } else {
            repeatEndPos = i + 1;
            if (repeatEndPos - repeatStartPos >= resultArray.length && repeatCount > 0) {
                resultArray = array.slice(repeatStartPos, repeatEndPos);
            }
            repeatCount = 0;
        }
    }
    return resultArray;
}
console.log(getMaxIncSequenceOf(sourceArray));
