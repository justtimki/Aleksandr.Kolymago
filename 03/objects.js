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
    }

var getDistanceBetween = function(pointA, pointB) {
    return "Distance between points are = " +
        Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

console.log(getDistanceBetween(p1, p2));

var lineA = {
    'pointA': {
        'x': 1,
        'y': 1
    },
    'pointB': {
        'x': 1,
        'y': 4
    }
}
var lineB = {
    'pointA': {
        'x': 1,
        'y': 1
    },
    'pointB': {
        'x': 3,
        'y': 1
    }
}
var lineC = {
    'pointA': {
        'x': 3,
        'y': 1
    },
    'pointB': {
        'x': 1,
        'y': 4
    }
}

var canFormTriangle = function(lineA, lineB, lineC) {
    var a,
        b,
        c;
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
arr.remove = function(element) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === typeof(element) && arr[i] === element) {
            arr.splice(i, 1);
        }
    }
    return arr;
};
console.log(arr.remove(1));

/**
  Task 3
  */
var getCopy = function(original) {
    var copy = {};
    for (var field in original) {
        copy[field] = original[field];
    }
    return copy;
};
var original = {
    'a': 5,
    'b': {
        'c': 'asd'
    }
};

console.log(getCopy(original));

/**
 * Task 4
 */
var printYoungestPerson = function(persons) {
    persons.sort(function(obj1, obj2) {
        if (obj1.age > obj2.age) {
            return 1;
        } else if (obj1.age < obj2.age) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(persons[0].firstName + " " + persons[0].lastName);
};
var persons = [
    { firstName: "Gosho", lastName: "Petrov", age: 32 },
    { firstName: "Bay", lastName: "Ivan", age: 81 },
    { firstName: "Oleg", lastName: "Olegov", age: 12 },
    { firstName: "Ivan", lastName: "Ivanov", age: 35 }
];

printYoungestPerson(persons);

/**
 * Task 5
 */
var persons = [
    { firstName: "Gosho", lastName: "Petrov", age: 32 },
    { firstName: "Bay", lastName: "Ivan", age: 81 },
    { firstName: "Oleg", lastName: "Olegov", age: 12 },
    { firstName: "Ivan", lastName: "Ivanov", age: 35 },
    { firstName: "Bay", lastName: "Ivanov", age: 35 },
    { firstName: "Oleg", lastName: "Lalakin", age: 32 },
];
var group = function(persons, attribute) {
    var map = {};
    map[attribute] = [];
    for (var i = 0; i < persons.length; i++) {
        map[attribute].push(persons[i]);
    }
    return map;
}

console.log(group(persons, "firstName"));
console.log(group(persons, "age"));
