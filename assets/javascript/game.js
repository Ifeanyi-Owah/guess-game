let alphabetListArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// counts the number of wins
let wins = document.querySelector("#wins");
// counts the number of losses
let losses = document.querySelector("#losses");
// stores and displays the letters guessed
let letterGuessedSoFarDisplay = document.querySelector("#guess-so-far");
// displays the remaining number of guesses
let remainingGuess = document.querySelector("#guess-count-remaining");
// win or loose state
let winOrLooseGame = document.querySelector("#win-or-loose");
// reset button
let resetButton = document.querySelector("#reset");
// generates the randomely guessed letter
let randomGuessedLetter = randomLetterGenerator();
let guessCount = 10;
let= guessCountScore = 10;
let winCount = 0;
let looseCount = 0;
let isGameOver = false;

resetButton.addEventListener("click",function(){
    window.location.reload();
    // randomLetterGenerator();
    // randomGuessedLetter = randomLetterGenerator();
    // winCount = 0;
    // wins.textContent = winCount;
    // looseCount = 0; 
    // losses.textContent = looseCount;
    // guessCount = 10;
    // remainingGuess.textContent = guessCount;
    // letterGuessedSoFarDisplay.textContent  = "";
    // winOrLooseGame.classList.toggle("state");
    // isGameOver = false;
});

console.log(randomGuessedLetter);


// if(!isGameOver){
       document.addEventListener("keypress",(event)=>{
           if(!isGameOver){
            letterGuessedSoFarDisplay.textContent  += " " + event.key;
            if(event.key === randomGuessedLetter){
                winCount++;
                wins.textContent = winCount;
                randomLetterGenerator();
                randomGuessedLetter = randomLetterGenerator();
                console.log(randomGuessedLetter);
                if(winCount === guessCountScore){
                    // isGameOver = true;
                    winOrLooseGame.classList.toggle("winGame");
                    winOrLooseGame.textContent = "You win";
                    isGameOver = true;
                    
                }
            } else {
                looseCount++;
                losses.textContent = looseCount;
                guessCount--;
                remainingGuess.textContent = guessCount;
                if(looseCount === guessCountScore){
                    winOrLooseGame.classList.toggle("looseGame");
                    winOrLooseGame.textContent = "Try Again";
                    isGameOver = true;
                
                } 
            
        }
        
       
        }
    });
    
// }
function randomLetterGenerator(){
    let randomLetterIndex = Math.floor(Math.random()*alphabetListArray.length);
    return alphabetListArray[randomLetterIndex];
}


   


   
   



