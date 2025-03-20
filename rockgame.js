let choices=["Rock","Paper","Scissor"];
let playerDisplay=document.getElementById("playerDisplay");
let computerDisplay=document.getElementById("computerDisplay");
let resultDisplay=document.getElementById("resultDisplay");
let playerScore=document.getElementById("playerScore");
let computerScore=Document.getElementById("computerScore");
let playerScores=0;
let computerScores=0;
function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result=""
    if (computerChoice===playerChoice){
        result="Its a TIE";
        
    }
    else{
        switch(playerChoice){
            case "Rock":
                result=(computerChoice === "Scissors") ? "You Win !" : "You Lose !";
                break;
            case "Paper":
                result=(computerChoice === "Rock") ? "You Win !" : "You Lose !";
                break;
            case "Scissor":
                result=(computerChoice === "Paper") ? "You Win !" : "You Lose !";
                break;

        }
    }
    playerDisplay.textContent=`Player : ${playerChoice}`;
    computerDisplay.textContent=`Computer : ${computerChoice}`;
    resultDisplay.textContent=result;

// resultDisplay.classList.remove("greenText","redText");
// switch(result){
//     case "You Win !":
//         resultDisplay.classList.add("greenText");
//         playerScores++;
//         playerScore.textContent=playerScores;
//         break;
//     case "You Lose !":
//         resultDisplay.classList.add("redText");
//         computerScores++;
//         computerScore.textContent=computerScores;
//         break;
// }
}