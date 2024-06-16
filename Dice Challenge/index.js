const images = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

// Generate a random number between 0 and 5 (inclusive)
const randomNumber1 = Math.floor(Math.random() * 6);
const randomNumber2 = Math.floor(Math.random() * 6);

// Get the img element with class 'img1' and update its src attribute
document.getElementsByClassName('img1')[0].src = "./images/" + images[randomNumber1];
document.getElementsByClassName('img2')[0].src = "./images/" + images[randomNumber2];

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins!"
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 wins!"
}else{
    document.querySelector("h1").innerText = "Refresh me"
}
console.log(randomNumber1)
console.log(randomNumber2)
