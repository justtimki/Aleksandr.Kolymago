/* =============== Arrays =============== */

/**
  Task 1
 */
var N = 5,
    array = [],
    max,
    min,
    sum = 0,
    avg = 0;
for (var i = 0; i < N; i++) {
    array[i] = i * 2;
}

console.log(array)

max = array[0];
for (var i = 0; i < N; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log("max", max);

min = array[0];
for (var i = 0; i < N; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log("min", min);

for (var i = 0; i < N; i++) {
    sum += array[i];
}
console.log("sum", sum);

avg = sum / N;
console.log("avg", avg);

/**
 Task 2
 */
var matrix = [],
    MATRIX_SIZE = 5;

for (var i = 0; i < MATRIX_SIZE; i++) {
    matrix[i] = [];
    for (var j = 0; j < MATRIX_SIZE; j++) {
        matrix[i][j] = Math.floor((Math.random() * 10) - 2);
    }
}

for (var i = 0; i < MATRIX_SIZE; i++) {
    for (var j = 0; j < MATRIX_SIZE; j++) {
        if (i === j) {
            if (matrix[i][j] >= 0) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
    }
}
