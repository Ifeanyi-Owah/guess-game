
// Game variables
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
// generates the randomely guessed letter
let randomGuessedLetter = alphabetListArray[0];
let guessCount = 10;
let guessCountScore = 10;
let winCount = 0;
let looseCount = 0;
let isGameOver = false;

// Game Events

    document.addEventListener("keypress",(e)=>{
        letterGuessedSoFarDisplay.textContent  += " " + e.key;
        if(e.key == randomGuessedLetter){
            winCount++;
            wins.textContent = winCount;
            if(winCount == guessCountScore){
                winOrLooseGame.classList.add("winGame");
                winOrLooseGame.textContent = "You Win, your English must be awesome!!!";
            }
        }
        else if(e.key !== randomGuessedLetter){
            guessCount--;
            remainingGuess.textContent = guessCount;
            looseCount++;
            losses.textContent = looseCount;
            if(looseCount == guessCountScore){
                winOrLooseGame.classList.add("looseGame");
                winOrLooseGame.textContent = "You Loose, work on your Alphabets bro!!!";

            }

        }
        
    });
            

// let randomLetterGenerator = ()=>{
//     let randomLetterIndex = Math.floor(Math.random()*26);
//     return randomLetterIndex;
// }




