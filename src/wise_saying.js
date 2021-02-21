const wiseSaying = document.querySelector(".wise-saying");

const sentences = [
  " No great man ever complains of want of opportunity.",
  "Do not accustom yourself to use big words for little matters.",
  "A day without laughter is a day wasted.",
  "Patterning your life around other's opinions is nothing more than slavery.",
  "love what you have.",
  " It ain't over till it's over.",
];

const numbers = 6;

function paintText(inRandomNum) {
  wiseSaying.innerText = sentences[inRandomNum];
}

function getRandomNumber() {
  const number = Math.floor(Math.random() * numbers);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintText(randomNumber);
}

init();
