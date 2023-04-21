function countUp() {
  // for first data-group
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 10;
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

// first group-b data
let secValueDisplays = document.querySelectorAll(".sec-num");
let secInterval = 4000;

secValueDisplays.forEach((secValueDisplay) => {
  let startValue = 100;
  let endValue = parseInt(secValueDisplay.getAttribute("data-val"));
  let duration = Math.floor(secInterval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    secValueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// for second data-group
let newValueDisplays = document.querySelectorAll(".newnum");
let newInterval = 4000;

newValueDisplays.forEach((newValueDisplay) => {
  let startValue = 70;
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
  let startValue = 70;
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



function myCountUp() {
  // for first data-group
let valueDisplays = document.querySelectorAll(".cl-num");
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
let newValueDisplays = document.querySelectorAll(".cl-newnum");
let newInterval = 4000;

newValueDisplays.forEach((newValueDisplay) => {
  let startValue = 127500;
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
let valDisplays = document.querySelectorAll(".cl-mynewnum");
let valInterval = 4000;

valDisplays.forEach((valDisplay) => {
  let startValue = 4000;
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