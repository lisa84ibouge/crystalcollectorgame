var compScore = 0;
var userScore = 0;
var wins = 0;
var losses = 0;
var crystal1 = 0;
var crystal2 = 0 ;
var crystal3 = 0;
var crystal4 = 0;


// Functions 
// Helper function for getting random numbers 
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Starts the game and restarts the game
function initializeGame() {

    
  userScore = 0;
  compScore = getRandomArbitrary(19, 120);
  //assign value to DOM elements
    $('#compScore').attr('value', compScore)
  crystal1 = getRandomArbitrary(1, 12);
  //assign value to DOM elements
   $('#crystal1').attr('value', crystal1)
  crystal2 = getRandomArbitrary(1, 12);
    $('#crystal2').attr('value', crystal2)
  crystal3 = getRandomArbitrary(1, 12);
    $('#crystal3').attr('value', crystal3)
  crystal4 = getRandomArbitrary(1, 12);
    $('#crystal4').attr('value', crystal4);

}
// change the HTML to reflect all of these changes 

function updateDom() {
  $('#compScore').text(compScore)
  $('#userScore').text(userScore)
  $('#crystal1').text(crystal1)
  $('#crystal2').text(crystal2)
  $('#crystal3').text(crystal3)
  $('#crystal4').text(crystal4)
  $('#wins').text(wins)
  $('#losses').text(losses)
  
  //crystal2
//crystal3
//crystal4
//userScore 
//wins
//losses

}

initializeGame();
updateDom();

function checkLoss() {
  if (userScore < compScore) {
    updateDom();
  } else if (userScore === compScore) {
    wins ++;
    $("#showWin").show();
    $("#instructions").hide();
    $("showLoss").hide();
     // document.getElementById("instructions").hide;
    document.getElementById("showWin").innerHTML = "Congratulations! You won!"
    // document.getElementById("instructions").innerHTML = "Great job! You won!";
    initializeGame();
    updateDom();

  } else {
    losses ++;
    $("#showLoss").show();
    $("#instructions").hide();
    $('#showWin').hide();
    document.getElementById("showLoss").innerHTML = "Sorry! You lost!"
    //document.getElementById("instructions").hide = true;
    // document.getElementById("showLoss").innerHTML = "Sorry, you lost!"
    initializeGame();
   updateDom();


  }
}
// Process and steps // 


$('#crystal1').on('click', function() {
  var num = Number($(this).attr('value'));
  userScore += num;
  checkLoss();
})

$('#crystal2').on('click', function() {
  var num = Number($(this).attr('value'));
  userScore += num;
  checkLoss();
})

$('#crystal3').on('click', function() {
  var num = Number($(this).attr('value'));
  userScore += num;
  checkLoss();
})

$('#crystal4').on('click', function() {
  var num = Number($(this).attr('value'));
  userScore += num;
  checkLoss();
})

$('#restartButton').on('click', function() {
    initializeGame();
    $('#instructions').show();
    $('#showWin').hide();
    $('#showLoss').hide();
    updateDom();

});

$('#resetTicker').on('click', function (){
    initializeGame();
    wins = 0;
    losses = 0;
    updateDom();
}
);

