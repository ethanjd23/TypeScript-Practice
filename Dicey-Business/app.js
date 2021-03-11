var diceContainer = document.getElementById('dice-container');
var diceGenerator = document.getElementById("btn-generator");
var diceRoller = document.getElementById("btn-roller");
var diceSumButton = document.getElementById("btn-sum");
var dieArray = [];
var Dice = /** @class */ (function () {
    function Dice() {
        this.container = document.createElement('div');
        this.container.className = 'dice';
        diceContainer.appendChild(this.container);
    }
    Dice.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.container.textContent = String(this.value);
    };
    return Dice;
}());
;
diceGenerator.addEventListener("click", makeNewDice);
diceRoller.addEventListener("click", rollDie);
diceSumButton.addEventListener("click", sumDice);
function makeNewDice() {
    var newDice = new Dice();
    newDice.roll();
    dieArray.push(newDice);
}
;
function rollDie() {
    for (var _i = 0, dieArray_1 = dieArray; _i < dieArray_1.length; _i++) {
        var item = dieArray_1[_i];
        item.roll();
    }
    ;
}
;
var testArray = [1, 2, 3, 4, 5];
function sumDice() {
    var sum = dieArray.reduce(function (a, b) { return a + b.value; }, 0);
    console.log(sum);
}
