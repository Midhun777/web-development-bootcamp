function generateFibonacci(n) {
    var arr = [0, 1];
    for (i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        arr.push(arr[i]);
        console.log(arr[i]);
    }
    return arr;
}

var resultArr = generateFibonacci(15);
console.log(resultArr);