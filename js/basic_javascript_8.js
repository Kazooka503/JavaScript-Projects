function Baha() {
    var part_1 = "Who let the dogs out? ";
    var part_2 = "woof ";
    var part_3 = "woof "; 
    var part_4 = "woof ";
    var part_5 = "woof ";
    var part_6 = "woof";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5, part_6);
    document.getElementById("merge").innerHTML = whole_sentence;
}

function slice_method() {
    var Sentence = "I want to do with you what spring does with cherry trees";
    var Section = Sentence.slice(44,50);
    document.getElementById("slice").innerHTML = Section;
}

function upper() {
    var Sentence = "to create one's world in any of the arts takes courage.";
    var Section = Sentence.toUpperCase();
    document.getElementById("upper").innerHTML = Section;
}

function search() {
    var str = "Playstation 5";
    var x = str.search("5");
    document.getElementById("search").innerHTML = x;
}

function numberstring() {
    var x = 420;
    document.getElementById("numberstring").innerHTML = x.toString();
}

function precise() {
    var x = 55555.555555555;
    document.getElementById("precise").innerHTML = x.toPrecision(5);
}

function fixed() {
    var x = 4.19256;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

function val() {
    var x = "May is awesome!";
    document.getElementById("value").innerHTML = x.valueOf();
}