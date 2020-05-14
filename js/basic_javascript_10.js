function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function lengthS() {
    var str = "Focus";
    var x = str.length;
    document.getElementById("focus").innerHTML = x;
}

function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; 
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

    function array_Function() {
        var timbers_player = [];
        timbers_player[0] = "Diego Valeri";
        timbers_player[2] = "Diego Chara";
        timbers_player[3] = "Sebastian Blanco";
        document.getElementById("Array").innerHTML = timbers_player[0] + " and " + timbers_player[3] + " are my favroite Portland Timbers players!";
    }

    function constant_function() {
        const skateboard = {type:"longboard", brand:"Landyachtz", color:"red", quality:"great"};
        skateboard.color = "green";
        skateboard.price = "$300";
        document.getElementById("Constant").innerHTML = "The color of the " + skateboard.type +
        " is " + skateboard.color + " and the producer is " + skateboard.brand + " who makes " + skateboard.quality + " boards."; 
    }

    function let_function() {
        x = 100;
        document.getElementById("Let").innerHTML = x;
        {
            let x = 50;
            document.getElementById("LetTwo").innerHTML = "<br>" + x;
        }
        document.getElementById("LetThree").innerHTML = "<br>" + x;
    }

    function return_function() {
        return "Greetings " + document.getElementById("greetings").value;       
    }

    function submit() {
        document.getElementById("demo").innerHTML = return_function();
    }

    function pokeball() {
        let pokemon = {
            name: "Pikachu ",
            type: "Electric ",
            hp: "100%",
            ability: "Static", 
            description: function() {
                return "The pokemon is " + this.name + " who is an " + this.type + " variety. It's special ability is " + this.ability + ".";
            }
        };
        document.getElementById("Pokeball").innerHTML = Object.assign(pokemon.description())

    }

    function brk() {
        var text = "";
        var x;
        for (x = 0; x < 20; x++) {
            if (x === 10) {break; }
            text += "The number is " + x + "<br>";
        }
        document.getElementById("Brk").innerHTML = text;
    }

    function brkcon() {
        var text = "";
        var x;
        for (x = 0; x < 20; x++) {
            if (x === 15) { continue; }
            text += "The number is " + x + "<br>";
        }
        document.getElementById("Brkcon").innerHTML = text;
    }

   


