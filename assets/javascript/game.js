$(document).ready(function() {
    //Set up initial global variables
    var gamestart = false; //State space variable to keep track of whether the game is started or not
    var targetScore;
    var buttonNums = []; //variable to store array of random values for buttons
    var playerScore; //We could set this to 0 and reset at quit or end instead, but using at start is more consistent
    var wins = 0;
    var losses = 0;

    
    function randButtons() {
        var buttonValues = [];
        for (i=0; i<4; i++) {
            buttonValues[i] = Math.floor((Math.random() * 11) + 1);
        }
        return buttonValues;
    }

    function initialize() { //Since there are many different points at which the game will be reset, having a function for that is useful
        gamestart = false; // Set our state back to before start
        targetScore = undefined; //Initializing from both ends for extra certainty of values
        buttonNums = [];
        $("#target").text("Target Score: ");
        $("#player").text("Your Score: ");
        $('#crystalSkullCap').text('');
        $('#humanSkullCap').text('');
        $('#lostSoulCap').text('');
        $('#skullAndCrossbonesCap').text('');
    }

    //Function to check if player has won or lost
    function judgement(score) { //Use playerScore indirectly as an input to avoid accidental changes
        if (score === targetScore) { //The winning condition
            alert("You have won…the Skull 'O Rama!");
            wins++;
            $("#wins").text("Wins: " + wins);
            initialize();
        }
        else if (score > targetScore) { //The losing condition
            alert("You have failed me! (but not for the last time)");
            losses++;
            $("#losses").text("Losses: " + losses);
        }
    }

    //Functions for image clicks
    $("#crystalSkull").click(function() {
        if(gamestart) {
            playerScore += buttonNums[0];
            $("#player").text("Your Score: " + playerScore);
            $("#crystalSkullCap").text(buttonNums[0]);
            judgement(playerScore);
        }
    })

    $("#humanSkull").click(function() {
        if(gamestart) {
            playerScore += buttonNums[1];
            $("#player").text("Your Score: " + playerScore);
            $("#humanSkullCap").text(buttonNums[1]);
            judgement(playerScore);
        }
    })

    $("#lostSoul").click(function() {
        if(gamestart) {
            playerScore += buttonNums[2];
            $("#player").text("Your Score: " + playerScore);
            $("#lostSoulCap").text(buttonNums[2]);
            judgement(playerScore);
        }
    })

    $("#skullAndCrossbones").click(function() {
        if(gamestart) {
            playerScore += buttonNums[3];
            $("#player").text("Your Score: " + playerScore);
            $("#skullAndCrossbonesCap").text(buttonNums[3]);
            judgement(playerScore);
        }
    })

    //Start and Quit buttons
    $("#start").click(function() {
        if (!gamestart) { //Will do nothing if game is already started
            gamestart = true; //Sets state variable to true for starting the game
            targetScore = Math.floor((Math.random() * 101) + 19); //A random value between 19 and 120 for the target
            $("#target").text("Target Score: " + targetScore); //Prints starting target score
            playerScore = 0;
            $("#player").text("Your Score: " + playerScore); //Prints the starting player score (which should ALWAYS be 0)
            buttonNums = randButtons(); //Assigns array of 4 random numbers between 1 and 12 to a variable
        }
    })

    $("#quit").click(function() {
        if (gamestart) //Does nothing when game isn't started
            initialize();
    })
})