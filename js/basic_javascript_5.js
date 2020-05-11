document.write(typeof 5);

function inf() {
    document.getElementById("demo").innerHTML =
    1.7976931348623157E+10308;
}

function negInf() {
    document.getElementById("demo").innerHTML =
    -1.7976931348623157E+10308;
}

function bootru() {
    document.getElementById("boo").innerHTML = (20>2);
}

function boof() {
    document.getElementById("boof").innerHTML = (20<2);
}

function log() {
    console.log(2+2);
}

function coerce() {;
    document.getElementById("coerce").innerHTML = ("33" + 3);
}

function dtru() {
    document.getElementById("dtru").innerHTML = (3 == 3);
}

function dfal() {
    document.getElementById("dfal").innerHTML = (3 == 4);
}

function eq() {
    document.getElementById("eq").innerHTML = (3 === 3);
}

function fOne() {
    document.getElementById("fOne").innerHTML = ("5" === 3);
}

function fTwo() {
    document.getElementById("fTwo").innerHTML = ("3" === 3);
}

function fThree() {
    document.getElementById("fThree").innerHTML = (3 === 5);
}

function andBoo() {
    document.getElementById("andBoo").innerHTML = (4 < 8 && 5 > 3);
}

function orTru() {
    document.getElementById("orTru").innerHTML = (20 > 100 || 3 > 1);
}

function orFal() {
    document.getElementById("orFal").innerHTML = (30 > 100 || 100 > 200);
}

function noTru() {
    document.getElementById("noTru").innerHTML = !(50 > 100);
}

function noFal() {
    document.getElementById("noFal").innerHTML = !(50 < 100);
}