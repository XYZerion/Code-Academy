// Coded By XYZerion

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();


// computer choice

if (computerChoice < 0.34) {
	computerChoice = "rock";

} else if (computerChoice <= 0.67) {
	computerChoice = "paper";

} else {
	computerChoice = "scissors";
}

document.write("Computer: " + computerChoice);

// compare function

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return 'The result is a tie!';
    }


// choice of rock

    else if (choice1 ==='rock') {

        if (choice2 === 'scissors') {
            return 'rock wins';
        }
        else {
            return 'paper wins';
        }
    }


// choice of paper

    else if (choice1 ==='paper'){

        if (choice2 ==='rock'){
            return 'paper wins';
        }
        else {
            return 'scissors wins';
        }
    }


// choice of scissors

    else if (choice1 ==='scissors'){

        if (choice2 ==='paper'){
            return 'scissors wins';
        }
        else {
            return 'rock wins';
        }
    }
}


// function call

var theResult = compare(userChoice, computerChoice);

document.write(' ' + theResult);
