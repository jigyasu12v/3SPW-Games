let userscore =0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");

const genCompchoice = () => {
const options =["rock", "paper", "scissors","snake","water"];
   const Randindx=Math.floor(Math.random() * 5)
   return options[Randindx].toString();
}

const drawGame = (userchoice) => {
    msg.innerText = " Game Draw. Play Again!!";
    msg.style.backgroundColor = "#081b31";
} 

const showWinner = (userWin,userchoice,compchoice) => {

    if(userWin) {
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = 'You Won! Your ' + userchoice +  ' beats the '+ compchoice;
        msg.style.backgroundColor ="green";
    }
    else{
        computerscore++;
        compScorepara.innerText=computerscore;
        msg.innerText = 'You lost! ' + compchoice + ' beats your '+ userchoice;
        msg.style.backgroundColor="red";
    }

}

const playGame = (userchoice) => {
 
    console.log(userchoice);
    const compChoice =genCompchoice();

    if(userchoice == compChoice) {
        drawGame(userchoice);
    }else {
        let userWin = true;
        if(userchoice == "rock") {
    
            userWin = (compChoice == "scissors" || compChoice == "snake") ? true : false; // rock- draw , paper-water-loss, scissor-snake-won
        } else if (userchoice == "paper") {
           
            userWin = (compChoice == "rock" || compChoice == "snake") ? true : false; // paper-draw, rock-snake-won,scissor-water-loss
        } else if (userchoice == "scissors") {
            
            userWin = (compChoice == "paper" || compChoice == "snake") ? true : false; // scissor- draw ,    snake-pAPER-WON , rock-WATER-LOSS
        } else if (userchoice == "snake") {
           
            userWin = (compChoice == "water" || compChoice == "paper") ? true : false; // SNAKE-DRAW ,   PAPER-WATER-WON        STONE-SCISSOR-LOSS
        } else if (userchoice == "water") {
          
            userWin = (compChoice == "paper" || compChoice == "scissors") ? true : false;  // WATER-DRAW,   PAPER-SCISSOR-WON     SNAKE-ROCK-LOSS
        }
        
         showWinner(userWin, userchoice, compChoice);
    }

};

choices.forEach((choice) =>  {
 choice.addEventListener("click",() =>  {
    const userchoice =choice.getAttribute("id");
     playGame(userchoice); //user_choice
    });
});



