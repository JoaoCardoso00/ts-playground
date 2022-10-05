"use strict";
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    console.log(arr
        .sort()
        .filter((num, i) => i < 4)
        .reduce((acc, curr) => acc + curr), arr
        .sort()
        .filter((num, i) => i > 0)
        .reduce((acc, curr) => acc + curr));
}
console.log("hello");
