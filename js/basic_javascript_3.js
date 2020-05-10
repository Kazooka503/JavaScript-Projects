function add() {
    var add = 5 + 5;
    document.getElementById("math").innerHTML = add;
}

function subtract() {
    var sub = 10 - 5;
    document.getElementById("mathTwo").innerHTML = sub;
}

function multiply() {
    var mul = 5 * 5;
    document.getElementById("mathThree").innerHTML = mul;
}

function divide() {
    var div = 10 / 2;
    document.getElementById("mathFour").innerHTML = div;
}

function more() {
    var moMath = (5 * 2) + (5 * 3);
    document.getElementById("mathFive").innerHTML = moMath;
}

function modulus() {
    var mod = 100 % 3;
    document.getElementById("mathSix").innerHTML = mod;
}

function neg() {
    var x = 20;
    document.getElementById("mathSeven").innerHTML = -x;
}

function inc() {
    var x = 5;
    x++;
    document.getElementById("mathEight").innerHTML = x;
}

function dec() {
    var x = 5;
    x--;
    document.getElementById("mathNine").innerHTML = x;
}

function rand() {
    x = Math.random();
    document.getElementById("mathTen").innerHTML = x;
}

function round() {
    x = Math.round(5.8);
    document.getElementById("mathEleven").innerHTML = x;
}