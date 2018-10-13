var randomNumber = 0;
var wins = 0;
var losses = 0;
var addTogether = 0;
var images = ["/assets/images/honda .jpeg", "/assets/images/Lambretta.jpeg", "/assets/images/moto-guzzi-v7sport.jpeg", "/assets/images/Vespa.jpeg"];
//var motoMoriniNum = 0;
//var motoGuzziNum = 0;
//var vespaNum = 0;
//var lambrettaNum = 0; //will need to refer to elements in code?
//var totalGameScore = 0;

$(document).ready(function () {



    var resetGame = function () {


        $("motorcycles").empty();

        randomNumber = Math.floor(Math.random() * 120) + 19;


        $("#result").html(randomNumber);
    }

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 15) + 1;




        // console.log(random);
        // var scooter = $("<div>");
        // scooter.attr({ "class": 'scooter', "data-random": random });

        // $("#motorcycle").append(scooter);
    }

    resetGame();

    var reset = function () {

    }




    $(document).on('click', ".scooter", function () {

        var totalNum = parseInt($(this).attr("data-random"));

        addTogether += totalNum;

        console.log(addTogether);

        $(".score-total").html(addTogether);

        if (addTogether > randomNumber) {

            losses--;


            $("#game-losses").html(losses);

            addTogether = 0;
            resetGame();
        }
        else if (addTogether === randomNumber) {

            wins++;


            $("#game-wins").html(wins);
            addTogether = 0;
            resetGame();
        }

    })


    //var mC = $("<div>");
    //mC.attr("class",'mC');
    //$("motorcycles").append(mC);


})













  /*  function randomTargetNumber() {
    randomNumber = Math.floor(Math.random() * 120) + 19;
   $("#random-number").append(randomNumber);
}

function resetRandomNumber() {
    $("#random-number").html(randomNumber);
}
console.log(randomTargetNumber); //print to html


function randomNumber(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() (max - min)) + min;
  console.log()
    // motoMoriniNum = Math.floor(Math.random() * 5) + 2;
    //motoGuzziNum = Math.floor(Math.random() * 30) + 2;
    //vespaNum = Math.floor(Math.random() * 15) + 1;
    //lambrettaNum = Math.floor(Math.random() * 2) + 2;
}

function addRandomNumber(value){
    randomNumber += value
    $("#crystalValues").html(crystalValue);
}



$(".MotoMorini").on("click", function() {
  //motoMoriniNum = 
   
}
//onclick button print & add amount to totalGameScore




//$(".MotoMorini").click(function() {
    //(".game-score").amend(??)   //create variables with the math in them and put var here

)})

//$("#random-number").mousedown(function() {
//var mcGame = Math.floor(Math.random)
//}


//clicks the buttons to add to either randomNumber -true, or dont add-false


//counter for wins



//counter for losses




//value generator that changes each game - create an array with the values


//if first MC added to second MC added to thrid MC and fourth MC = total value, WIN

//when MC/numbers added != random number = false(looses*/