const start = document.getElementById("start");
const goomba = document.querySelectorAll(".goomba");
const mario = document.querySelectorAll(".mario");

start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  gameStart();
});

const gameStart = () => {
  setInterval(() => {
    let current;
    let goombaMario = Math.floor(Math.random() * 3) + 1;
    let rnd = Math.floor(Math.random() * goomba.length);
    current = rnd
    // if(current === rnd){
    //     console.log("this is the same number")
    // }
    if (goombaMario === 1) {
      goomba[rnd].classList.add("up");
      setTimeout(() => {
        goomba[rnd].classList.remove("up")
      }, 1000);
    } else if (goombaMario === 2) {
      mario[rnd].classList.add("up");
      setTimeout(() => {
        mario[rnd].classList.remove("up")
      }, 1000)
    }
    console.log(rnd);
  }, 1200);
};
