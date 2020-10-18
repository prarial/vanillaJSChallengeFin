const focusToday = document.querySelector(".js-focus-today");
const todayText = focusToday.querySelector(".todayText");
const inputForm = focusToday.querySelector("input");
const focusWarp = document.querySelector(".yourFocus");
const focusClass = focusWarp.querySelector(".js-focus"); 
const plusBtn = focusWarp.querySelector(".js-plusBtn");
const checkBox = focusWarp.querySelector(".js-check-box");

const INTEXT = "showing",
INTEXT2 = "showing2",
FOCUS_LS = "focusSomething";
DECO_UNDERLINE = "line_one"




function checkBoxEvent() {
   if(checkBox.checked == true){
       focusClass.classList.add(DECO_UNDERLINE);
   } else{
       focusClass.classList.remove(DECO_UNDERLINE);
   }
}

const handleMouseEventChkBOX = {
    onMouse : function mousEenter(){
        checkBox.classList.add(INTEXT2);
     },
     Mouseleavethere : function MouseLeave(){
        checkBox.classList.remove(INTEXT2);
     }
}


const handleMouseEventPlusBtn = {
   onMouse : function mousEenter(){
       plusBtn.classList.add(INTEXT2);
    },
    Mouseleavethere : function MouseLeave(){
    plusBtn.classList.remove(INTEXT2);
    },
    MouseClick: function clickPlusBtn(){
        localStorage.removeItem(FOCUS_LS);
        focusWarp.classList.remove(INTEXT2);
        inputForm.classList.add(INTEXT);
        todayText.innerText = "What is your main focus for today?";
    }

}


function mouseEvents(){
    focusWarp.addEventListener("mouseenter", handleMouseEventPlusBtn.onMouse);
    focusWarp.addEventListener("mouseleave", handleMouseEventPlusBtn.Mouseleavethere);
    plusBtn.addEventListener("click", handleMouseEventPlusBtn.MouseClick);
    focusWarp.addEventListener("mouseenter", handleMouseEventChkBOX.onMouse);
    focusWarp.addEventListener("mouseleave", handleMouseEventChkBOX.Mouseleavethere);
}



function saveFocus(text){
    localStorage.setItem(FOCUS_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = inputForm.value;
    paintFocus(currentValue);
    saveFocus(currentValue);
    todayText.innerText = "TODAY";
  

}

function askFocus(){
    inputForm.classList.add(INTEXT);
    focusToday.addEventListener("submit", handleSubmit);
}

function paintFocus(text){
    inputForm.classList.remove(INTEXT);
    focusWarp.classList.add(INTEXT2);
    focusClass.innerText = `${text}`;
}


function loadFocusToday(){
    const focus = localStorage.getItem(FOCUS_LS);
    if (focus === null){
        askFocus();
    }
    else{
        todayText.innerText = "TODAY";
        paintFocus(focus);
    }
}


function init(){
    loadFocusToday();
    mouseEvents();
}

init();