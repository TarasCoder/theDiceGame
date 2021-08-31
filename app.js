let img1 = document.querySelector(".img1").setAttribute("src", "images/dice1.png")
let img2 = document.querySelector(".img2").setAttribute("src", "images/dice2.png")
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber)