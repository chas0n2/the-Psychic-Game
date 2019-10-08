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


//letters leftover for guess
var guessesLeft = function() {
    document.getElementById("left").innerHTML = left;
}






//document.onkeyup = function(event) {
//    var userGuess = event.key;
//    left--;
//    guessChoices.push(userGuess);
//    soFar();
//    guessesLeft();
//}