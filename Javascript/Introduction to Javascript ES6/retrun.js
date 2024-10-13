function getMilk(money,costPerBottle) {
    console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
    return calcChange(money, costPerBottle);
}

function calcBottles(startMoney, costPerBottle) {
    var numberBottles = Math.floor(startMoney / costPerBottle);
    return numberBottles;
}

function calcChange(startMoney, costPerBottle) {
    var change = startMoney % costPerBottle;
    return change;
}

console.log("Hey master here your " + getMilk(20,1.5) + " change")