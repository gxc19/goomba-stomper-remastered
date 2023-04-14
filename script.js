const start = document.getElementById("start");
const timer = document.getElementById("time");
const goomba = document.querySelectorAll(".goomba");
const mario = document.querySelectorAll(".mario");
let previous;
let gameStatus = false;
let gameOver = false;

// pressing will start the game
start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  time();
  gameStart();
});

const time = () => {
  let num = 10;
  gameStatus = true;
  if (gameStatus) {
    timer.style.visibility = "initial";
  }
  let countDown = setInterval(() => {
    num--;
    if (num === 0) {
      clearInterval(countDown);
      start.innerHTML = "Try Again?";
      start.style.visibility = "initial";
      gameOver = true;
    }
    timer.innerHTML = `${num}`;
  }, 1000);
};

const gameStart = () => {
  // randomly picks 0 or 1
  const goombaMario = () => {
    return Math.floor(Math.random() * 2);
  };

  // randomly picks which to pop up and prevents previous number from being picked again
  const randomGoombaMario = () => {
    let rnd = Math.floor(Math.random() * goomba.length);
    if (rnd === previous) {
      return randomGoombaMario();
    }
    previous = rnd;
    return previous;
  };

  // Goomba pops up if true, whilst Mario pops up if false
  const popUp = () => {
    let rnd = randomGoombaMario();
    if (goombaMario()) {
      goomba[rnd].classList.add("up");
      setTimeout(() => {
        goomba[rnd].classList.remove("up");
      }, 1000);
    } else {
      mario[rnd].classList.add("up");
      setTimeout(() => {
        mario[rnd].classList.remove("up");
      }, 1000);
    }
  };

  setInterval(popUp, 1200);
};
