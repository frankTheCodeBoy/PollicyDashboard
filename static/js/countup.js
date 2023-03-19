$(document).ready(function(){
  // for first data-group
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// for second data-group
let newValueDisplays = document.querySelectorAll(".newnum");
let newInterval = 4000;

newValueDisplays.forEach((newValueDisplay) => {
  let startValue = 69000;
  let endValue = parseInt(newValueDisplay.getAttribute("data-val"));
  let duration = Math.floor(newInterval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    newValueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//for third data-group
let valDisplays = document.querySelectorAll(".mynewnum");
let valInterval = 4000;

valDisplays.forEach((valDisplay) => {
  let startValue = 296500;
  let endValue = parseInt(valDisplay.getAttribute("data-val"));
  let duration = Math.floor(valInterval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
  });
;}
)