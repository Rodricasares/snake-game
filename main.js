
const playBoard = document.querySelector(".playboard");

let foodX;
let foodY;
let snakeX = 25;
let snakeY = 10;
let velocityX = 0;
let velocityY = 0;



const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30 ) +1;
  foodY = Math.floor(Math.random() * 30 ) +1;
};

const changeDirection = (e) => {
  if (e.key === "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  }
 // initGame();
};

const initGame = () => {
  
let htmlMarkup =`<div class='food' style='grid-area: ${foodY} / ${foodX}'></div>`;


playBoard.innerHTML = htmlMarkup;
if(snakeX ===  foodX && snakeY === foodY){
  changeFoodPosition();
}

  snakeX += velocityX;
  snakeY += velocityY;

htmlMarkup+=`<div class='head' style='grid-area: ${snakeY} / ${snakeX}'></div>`;

};


changeFoodPosition();
setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);
