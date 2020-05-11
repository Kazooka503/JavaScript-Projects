function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function tru() {
    document.getElementById("True").innerHTML = isNaN('Example String');
}

function fal() {
    document.getElementById("False").innerHTML = isNaN('5');
}