
let alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let guessedLetter = alphabetArray[0];
var guess = document.querySelector("#guess");
document.addEventListener("keyup",(e)=>{
    guess.textContent = e.key;
    if(e.key == guessedLetter){
        alert("win");
    }
    

});



