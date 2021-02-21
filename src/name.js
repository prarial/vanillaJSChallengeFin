const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  greeBtn = document.querySelector(".js-greeingsBtn"),
  greetingWrap = document.querySelector(".nameWrap");

const USER_LS = "crruentUser",
  SHOWING_CN = "showing";

const ANIMATION = "animtaionOne";
const COLOR = "color";

let = GOOD_STUFF = "true";

const handleMouseEventMore = {
  onMouse: function mousEenter() {
    greeBtn.classList.add(SHOWING_CN);
  },
  Mouseleavethere: function MouseLeave() {
    greeBtn.classList.remove(SHOWING_CN);
  },
  MouseClick: function clickPlusBtn() {
    if (GOOD_STUFF === "true") {
      greeting.classList.add(ANIMATION);
      GOOD_STUFF = "false";
    } else {
      greeting.classList.remove(ANIMATION);
      GOOD_STUFF = "true";
    }
  },
};

function clickMoreBtn() {}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); //이거 누르면 원래 기능을 막음
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours <= 10) {
    greeting.innerText = `good Morning, ${text}`;
  } else if (hours >= 11 && hours <= 15) {
    greeting.innerText = `good Afternoon, ${text}`;
  } else if (hours >= 17 && hours <= 20) {
    greeting.innerText = `good Evening, ${text}`;
  } else {
    greeting.innerText = `Hello, ${text}`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function mouseEvents() {
  greetingWrap.addEventListener("mouseenter", handleMouseEventMore.onMouse);
  greetingWrap.addEventListener(
    "mouseleave",
    handleMouseEventMore.Mouseleavethere
  );
  greeBtn.addEventListener("click", handleMouseEventMore.MouseClick);
}

function init() {
  loadName();
  mouseEvents();
}

init();
