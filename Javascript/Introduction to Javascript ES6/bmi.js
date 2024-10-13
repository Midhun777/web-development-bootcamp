function calcBmi(w, h) {
    var bmi = w /Math.pow(h,2);
    return bmi;
}

var bmiVal = calcBmi(65, 1.8);
console.log(Math.round(bmiVal));