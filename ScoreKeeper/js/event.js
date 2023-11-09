let player1 = 0;
let player2 = 0;

const pla1 = document.querySelector("#Player1");
const pla2 = document.querySelector("#Player2");

const totalRound = document.querySelector("#reset");
const target = document.querySelector("#target");

const h1 = document.querySelector("h1");

const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

let max = parseInt(target.value);

const addColor = function () {
  if (player1 > player2) {
    score1.classList.add("text-success");
    score2.classList.add("text-danger");
  } else {
    score1.classList.add("text-danger");
    score2.classList.add("text-success");
  }
};

const removeColor = function () {
  if (score1.classList.contains("text-success"))
    score1.classList.remove("text-success");
  else if (score1.classList.contains("text-danger"))
    score1.classList.remove("text-danger");

  if (score2.classList.contains("text-success"))
    score2.classList.remove("text-success");
  else if (score2.classList.contains("text-danger"))
    score2.classList.remove("text-danger");
};

const endGame = function () {
  addColor();

  pla1.classList.toggle("disabled");
  pla2.classList.toggle("disabled");
};

const reset = function () {
  removeColor();

  player1 = 0;
  player2 = 0;
  if (pla1.classList.contains("disabled")) {
    pla1.classList.toggle("disabled");
    pla2.classList.toggle("disabled");
  }
  score1.innerHTML = player1;
  score2.innerHTML = player2;
};

const scoreKeeper = function () {
  target.addEventListener("change", () => {
    max = target.value;
    reset();
  });
  pla1.addEventListener("click", () => {
    if (player1 < max - 1 && player2 < max - 1) player1++;
    else {
      player1 = max;
      endGame();
    }

    score1.innerHTML = player1;
    score2.innerHTML = player2;
  });

  pla2.addEventListener("click", () => {
    if (player1 < max - 1 && player2 < max - 1) player2++;
    else {
      player2 = max;
      endGame();
    }

    score1.innerHTML = player1;
    score2.innerHTML = player2;
    ////h1.textContent = `${player1} to ${player2}`;
  });

  totalRound.addEventListener("click", () => reset());
};

let colorChanger = function (color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

scoreKeeper();
