let displayPlayerScore = document.getElementById('displayPlayerScore');
let displayComputerScore = document.getElementById('displayComputerScore');
let report = document.getElementById('report');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function game(){
let choice = 0;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', choseRock)
rock.addEventListener('click', logic);


function choseRock(){
    choice = 1;
}

paper.addEventListener('click', chosePaper);
paper.addEventListener('click', logic);


function chosePaper(){
    choice = 2;
}

scissors.addEventListener('click', choseScissors);
scissors.addEventListener('click', logic);

function choseScissors(){
    choice = 3;
}

function logic(){

    let computerPlay = Math.floor(Math.random() * 3) + 1;
    console.log(choice)
    console.log(computerPlay);

    if((choice == 1 && computerPlay == 1) || (choice == 2 && computerPlay == 2) || (choice == 3 && computerPlay == 3)){
        console.log('Tie');
        report.textContent = "Tie";

    }
    else if((choice == 1 && computerPlay == 3) || (choice == 2 && computerPlay == 1) || (choice == 3 && computerPlay == 2)){
        console.log('Player Wins');
        report.textContent = "Player Wins!"
        playerScore = playerScore + 1;
        displayPlayerScore.innerHTML = `Player: ${playerScore}`;
    }
    else if((choice == 1 && computerPlay == 2) || (choice == 2 && computerPlay == 3) || (choice == 3 && computerPlay == 1)){
        console.log('PC Wins');
        report.textContent = "PC Wins!"
        computerScore = computerScore + 1;
        displayComputerScore.innerHTML = `Computer: ${computerScore}`;
    }   
}
}

game()

