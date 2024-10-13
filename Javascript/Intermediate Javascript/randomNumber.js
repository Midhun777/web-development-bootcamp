function getRandom() {
    var n = Math.random();
    // console.log(Math.round(n * 6)); //To get numbers bewteen 0 and 6
    console.log(Math.floor(n*6) + 1); //To get numbers bewteen 1 and 6
}

getRandom();
