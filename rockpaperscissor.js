
let userScore = 0;
let botScore = 0;

// To access  : 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#Player-Score");
const botScorePara = document.querySelector("#Bot-Score");

const genBotChoice = () => {
    const options = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "blue";
}

const showWinner = () => {
    if(userWin == true){
        userScore++;
        userScorePara.innerText =userScore;
        console.log("Congrutulations!! You won!!");
        msg.innerText = "Congrutulations!! You won!!"
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lost");
        botScore++;
        botScorePara.innerText = botScore;
        console.log("You Lost!! Bot Won");
        msg.innerText = "You Lost!!";
        msg.style.backgroundColor = "red";
    }
}
 
const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice);

    // To Generate Computer Choice
    const botChoice = genBotChoice();
    console.log("Bot Choice = ",botChoice) 

    if(userChoice===botChoice){
        // Draw Game
        drawGame();  
    }else {
        let usrrWin = true
        if(userChoice === "Rock"){
            // scissor or Paper 
            userWin = botChoice === "Paper"? false: true;
        }else if (userChoice === "Paper"){
            // Rock or Scissor 
            userWin = botChoice ==="Scissor"? false: true;
        }else {
            // Scissor : Rock or Paper 
            userWin = botChoice ==="Rock"? false: true;
        }
        showWinner(userWin);
    }
}

// To Generate User Choice : 
choices.forEach((choice) => {
    // To access the ID : 
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})