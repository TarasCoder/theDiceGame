let count1 = 0;
let count2 = 0;

let startBtn = document.querySelector(".startGame");
let resetBtn = document.querySelector(".reset");
let mainText = document.querySelector(".mainInfo");
let count1Text = document.querySelector(".count1");
let count2Text = document.querySelector(".count2");

startBtn.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);

function playGame(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")
    if (randomNumber1 > randomNumber2){
        mainText.innerText = "🚩 Player 1 Wins!";
        count1++;
        count1Text.innerText = "Count: " + count1;
    } else if (randomNumber1 < randomNumber2){
        mainText.innerText = "Player 2 Wins! 🚩";
        count2++;
        count2Text.innerText = "Count: " + count2;
    } else {
        mainText.innerText = "DRAW!"
    }
}
function resetGame(){
    mainText.innerText = "Start game!";
    count1 = 0;
    count2 = 0;
    count1Text.innerText = "Count " + count1;
    count2Text.innerText = "Count " + count2;
}
