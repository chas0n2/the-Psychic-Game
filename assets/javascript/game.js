//js script(to enable js within html) linked to html
    
    //Guess letter variable array
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console logging array
    console.log(letters)
    // default values
        var wins = 0;
        var losses = 0;
        var left = 9;
        var guesses = 9;
        var guessChoices = [];
        var psychicLetter;
        
//Math for randomly generating letters
var newLetter = function() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
}


//letters leftover for guesses
var guessesLeft = function() {
    document.getElementById("left").innerHTML = guesses;
}






document.onkeyup = function(event) {
   console.log(event)
    var userGuess = event.key;
    for (i = 0; i < guessChoices.length; i++) {
        if (userGuess === guessChoices[i]) {
            alert("You guessed this letter");
            return
        }
    }
    guessChoices.push(userGuess);
    guesses--
    if (userGuess === psychicLetter) {
        alert("You guess right!")
        wins++
        guesses = 9
        document.getElementById("wins").innerHTML = wins;
    } else if (guesses === 0) {
        alert("You Lose!")
        losses++
        guesses = 9
        document.getElementById("losses").innerHTML = losses;
    }  
        guessesLeft()
    
    
    console.log(userGuess);
}
newLetter()
console.log(psychicLetter);

