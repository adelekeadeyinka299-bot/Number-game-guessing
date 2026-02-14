// Computer picks random number
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess = document.getElementById("userGuess").value;
    let result = document.getElementById("result");

    if (guess == randomNumber) {
        result.innerHTML = "🎉 Correct! You guessed it!";
    } else if (guess > randomNumber) {
        result.innerHTML = "Too high! Try again.";
    } else {
        result.innerHTML = "Too low! Try again.";
    }
}