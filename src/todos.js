const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDOList = document.querySelector(".js-toDoList"),
  toDoButton = document.querySelector(".dotoBtn"),
  toDoVisual = document.querySelector(".js-toDoFormWrap");

const TODOS_LS = "toDos";
const DECOBUTTON = "decobuttons";
const DECOTEXT = "decotext";
const DECOLI = "decoli";
const ACTIVE = "active";

function handleClick() {
  if (control === "true") {
    toDoVisual.classList.add(ACTIVE);
    control = "false";
  } else {
    toDoVisual.classList.remove(ACTIVE);
    control = "true";
  }
}

function filterFn(toDo) {
  return toDo.id === 1;
}

let toDos = [],
  control = "true";

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDOList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "🧺";
  span.classList.add(DECOTEXT);
  delBtn.classList.add(DECOBUTTON);
  li.classList.add(DECOLI);
  delBtn.addEventListener("click", deleteToDo);

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);

  li.id = newId;
  toDOList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoButton.addEventListener("click", handleClick);
}

init();
