/* =============== Constructions =============== */

/**
  Task 1
 */
var A = 1,
    B = 11,
    sum = 0;
for (var i = A; i < B; i++) {
    sum += i;
}
console.log(sum);
for (var i = A; i < B; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/**
  Task 2
 */
var N = 5,
    factorial = N;
do {
    console.log(factorial);
    if (factorial === 1) {
        break;
    }
    factorial--;
} while (true);

/**
  Task 3
 */

/* rectangle */
var a = 10,
    b = 3,
    LINE_COUNT = b;
document.write("<h3>Rectangle</h3>");
for (var i = 0; i < LINE_COUNT; i++) {
    for (var j = 0; j < a; j++) {
        document.write("*");
    }
    document.write("<br>");
}
/* right triangle */
document.write("<h3>Right triangle</h3>");
var LINE_COUNT = 5;
for (var i = 0; i < LINE_COUNT; i++) {
    for (var j = 0; j < i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

/* triangle */
document.write("<h3>Triangle</h3>");
var LINE_COUNT = 5;

for (var i = 1; i <= LINE_COUNT; i++) {
    for (var j = 0; j < (LINE_COUNT - i); j++) {
        document.write("&nbsp&nbsp");
    }
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    for (var k = 1; k < i; k++) {
        document.write("*");
    }
    document.write("<br>");
}

/* rhombus */
document.write("<h3>Rhombus</h3>");
var LINE_COUNT = 5;

for (var i = 1; i <= LINE_COUNT; i++) {
    for (var j = 0; j < (LINE_COUNT - i); j++) {
        document.write("&nbsp&nbsp");
    }
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    for (var k = 1; k < i; k++) {
        document.write("*");
    }
    document.write("<br>");
}

for (var i = LINE_COUNT - 1; i >= 1; i--) {
    for (var j = 0; j < (LINE_COUNT - i); j++) {
        document.write("&nbsp&nbsp");
    }
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    for (var k = 1; k < i; k++) {
        document.write("*");
    }
    document.write("<br>");
}
