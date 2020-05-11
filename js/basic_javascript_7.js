var y = "global variable";

function local() {
    var x = 10;
    console.log(5 + x);
}

function global() { ;
    console.log(x + 200);
}

local();
global();

function get_Date() {
    if (new Date().getHours() < 21) {
        document.getElementById("early").innerHTML = "It's still early in the day!"
    }
}

function ifS() {
    if (5 > 3) {
        document.getElementById("greater").innerHTML= "5 is greater than 3!"
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 5.5) {
        Ride = "You are tall enough to ride the coaster!";
    }
    else {
        Ride = "You are not tall enough to ride the coaster!";
    }
    document.getElementById("how_tall").innerHTML = Ride;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is monring time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}