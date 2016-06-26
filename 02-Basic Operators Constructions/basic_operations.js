/* =============== Basic Operations =============== */
var x = 6,
    y = 15,
    z = 4;

/**
  Task 1
 */
x += y - x++ * z;
console.log(x);

z = --x - y * 5;
console.log(z);

y /= x + 5 % z;
console.log(y);

z = x++ + y * 5;
console.log(z);

x = y - x++ * z;
console.log(x);

/**
 Task 2
 */
var avg = (5 + 2 + 5) / 3;
console.log(avg);

/**
 Task 3
 */
var V,
    S,
    r = 10,
    h = 5;
V = Math.PI * r * 2 * h;
console.log("V =", V);

S = 2 * Math.PI * r * (r + h);
console.log("S =", S);
