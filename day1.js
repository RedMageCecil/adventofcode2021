const fs = require("fs");

/* DAY 1 PART 1
Counting the number of times the value increases from the previous value.
*/

let count = 0;

function day1part1 (fileInput) {

    const data = fs.readFileSync("./data/" + fileInput).toString("utf8").split("\r\n");
    const intData = data.map (function (x) {
        return parseInt(x, 10);
    })

    intData.forEach(countTheIncrements);

    return count;
}

function countTheIncrements (ele, ndx, arr) {
    if (ndx > 0) {
        if (ele > arr[ndx - 1]) {
            count++;
        }
    }
}

console.log(day1part1("day1.txt"));

/* DAY 1 PART 2
Now we count in a 3 cell (a + b + c, compares to b + c + d). Repeat as before.
*/

function day1part2 (fileInput) {
    const data = fs.readFileSync("./data/" + fileInput).toString("utf8").split("\r\n");
    const intData = data.map (function (x) {
        return parseInt(x, 10);
    })
    count = 0;

    intData.forEach(countTheThreeCellIncrements);

    return count;
}

function countTheThreeCellIncrements (ele, ndx, arr) {
    if (ndx > 2) {
        if ((arr[ndx - 2] + arr[ndx - 1] + arr[ndx]) > (arr[ndx - 3] + arr[ndx - 2] + arr[ndx - 1])) {
            count++;
        }
    }
}

console.log(day1part2("day1.txt"));