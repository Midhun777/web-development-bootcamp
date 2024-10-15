var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var result = document.getElementById("result");
var buttonRandom = document.getElementById("buttonRandom");

var randomNo1;
var randomNo2;

function generateImage() {
    if (randomNo1 === 1) {
        img1.src = "./images/dice1.png";
    }
    if (randomNo1 === 2) {
        img1.src = "./images/dice2.png";
    }
    if (randomNo1 === 3) {
        img1.src = "./images/dice3.png";
    }
    if (randomNo1 === 4) {
        img1.src = "./images/dice4.png";
    }
    if (randomNo1 === 5) {
        img1.src = "./images/dice5.png";
    }
    if (randomNo1 === 6) {
        img1.src = "./images/dice6.png";
    }

    if (randomNo2 === 1) {
        img2.src = "./images/dice1.png";
    }
    if (randomNo2 === 2) {
        img2.src = "./images/dice2.png";
    }
    if (randomNo2 === 3) {
        img2.src = "./images/dice3.png";
    }
    if (randomNo2 === 4) {
        img2.src = "./images/dice4.png";
    }
    if (randomNo2 === 5) {
        img2.src = "./images/dice5.png";
    }
    if (randomNo2 === 6) {
        img2.src = "./images/dice6.png";
    }
}

function getResults() {
    if (randomNo1 > randomNo2) {
        result.innerText = "Player 1 Won!!!"
    }
    if (randomNo1 < randomNo2) {
        result.innerText = "Player 2 Won!!!"
    }
    if (randomNo1 === randomNo2) {
        result.innerText = "Draw!!!"
    }
}

function generateRandomNumber() {
    randomNo1 = Math.floor(Math.random() * 6 + 1);
    randomNo2 = Math.floor(Math.random() * 6 + 1);
    console.log(randomNo1);
    console.log(randomNo2);
    generateImage();
    getResults();
}

buttonRandom.addEventListener("click", function () {
    console.log("clicked")
    generateRandomNumber();
});
