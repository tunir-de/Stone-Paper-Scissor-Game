let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompScore = () =>{
    const options = ["stone","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const draw = () =>{
    msg.innerText = "Game was draw, Play again!";
    msg.style.backgroundColor = "rgb(2, 2, 31)";   
    msg.style.borderRadius = "2rem";
};
 
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.borderRadius = "2rem";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.borderRadius = "2rem";
    }
};    

const playgame = (userChoice) =>{
    const compChoice = generateCompScore();
    if(userChoice === compChoice){
        draw();
    } 
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }
        else{
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
