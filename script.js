const start = document.getElementById("start");
const goomba = document.querySelectorAll(".goomba");
const mario = document.querySelectorAll(".mario");
let previous;

start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  gameStart();
});

const gameStart = () => {
  // randomly picks 0 or 1
  const goombaMario = () => {
    return Math.floor(Math.random() * 2);
  };

  // randomly picks which to pop up and prevents previous number from being picked again
  const randomGoombaMario = () => {
    let rnd = Math.floor(Math.random() * 3);
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
