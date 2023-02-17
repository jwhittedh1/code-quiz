var timeEl = document.querySelector(".time");

var secondsLeft = 75;

var questions = [
    "What is the programming language that can add interactivity to a website?"
    ""
]

function setTime() {
    var timerInterval = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
    }
    })
}

setTime();
