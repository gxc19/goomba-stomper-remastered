const start = document.getElementById("start");
const timer = document.getElementById("time");
const goomba = document.querySelectorAll(".goomba");
const mario = document.querySelectorAll(".mario");
let previous;
let num = 16;
let gameInfo = false;
let gameOver = false;

// pressing will start the game
start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  time();
  gameStart();
  gameOver = false;
  num = 16;
});

// count down timer, stops once it reaches 0
const time = () => {
  gameInfo = true;
  if (gameInfo) {
    timer.style.visibility = "initial";
  }
  let countDown = setInterval(() => {
    num--;
    timer.innerHTML = `${num}`;
    if (num === 0) {
      clearInterval(countDown);
      start.innerHTML = "Try Again?";
      start.style.visibility = "initial";
      gameOver = true;
    }
  }, 1000);
};

// the meat and potatoes of the functions
const gameStart = () => {
  // randomly picks 0 or 1
  const goombaMario = () => {
    return Math.floor(Math.random() * 2);
  };

  // randomly picks from an array of numbers
  const randomTime = () => {
    let rndTimes = [400, 800, 1100];
    let rnd = Math.floor(Math.random() * rndTimes.length);
    return rndTimes.splice(rnd, 1);
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
    let rndTime = randomTime();
    let rnd = randomGoombaMario();
    if (goombaMario()) {
      goomba[rnd].classList.add("up");
      setTimeout(() => {
        goomba[rnd].classList.remove("up");
      }, rndTime);
    } else {
      mario[rnd].classList.add("up");
      setTimeout(() => {
        mario[rnd].classList.remove("up");
      }, rndTime);
    }
    if (gameOver) {
      clearInterval(peep);
    }
  };

  let peep = setInterval(popUp, 1000);
};

// for each Goomba, the one clicked on will change to a dead verison
goomba.forEach((current) => {
  current.addEventListener("click", () => {
    current.dataset.dead = "true";
    if (current.dataset.dead) {
      current.src = "./images/deadGoomba.png";
      current.classList.remove("up");
      console.log("pressed");
    }
    setTimeout(() => {
      current.src = "./images/goomba.png";
    }, 500);
  });
});

// for each Mario, the one clicked on will change to a dead version
mario.forEach((current) => {
  current.addEventListener("click", () => {
    current.dataset.dead = "true";
    if (current.dataset.dead) {
      current.src = "images/deadMario.png";
      current.classList.remove("up");
      console.log("pressed");
    }
    setTimeout(() => {
      current.src = "images/mario.png";
    }, 500);
  });
});
