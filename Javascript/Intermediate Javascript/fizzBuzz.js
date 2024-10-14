var i = 1;
var j = 1;
// var result;
var arr = [];

// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         result = "FizzBuzz";

//     }
//     else if (i % 3 == 0) {
//         result = "Fizz";
//     } else if (i % 5 == 0) {
//         result = "Buzz"
//     } else {
//         result = i;
//     }

//     arr.push(result);
// }

// console.log(arr)

function fizzBuzz() {
    if (i % 3 == 0 && i % 5 == 0) {
        arr.push("FizzBuzz");
        i++;
    }
    else if (i % 3 == 0) {
        arr.push("Fizz");
        i++;
    } else if (i % 5 == 0) {
        arr.push("Buzz");
        i++;
    } else {
        arr.push(i);
        i++;
    }
    console.log(arr);
}

for (j = 1; j <= 100; j++) {
    fizzBuzz();
}