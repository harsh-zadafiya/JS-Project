// My Project is also push in my github account if you want to see my work progress so it's link is here : https://github.com/harsh-zadafiya/JS-Project

"use strict";
const $ = (selector) => document.querySelector(selector);

const padSingleDigit = (num) => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
  let currTime = new Date();
  let hours = currTime.getHours();
  let minutes = currTime.getMinutes();
  let seconds = currTime.getSeconds();
  let greet;

  if (hours < 12) greet = "Good Morning";
  else if (hours >= 12 && hours <= 17) greet = "Good Afternoon";
  else if (hours >= 17 && hours <= 24) greet = "Good Evening";

  // convert to 12-hour clock
  let ampm = "AM";
  if (hours >= 12) {
    hours = hours - 12;
    ampm = "PM";
  }

  // handle midnight as 12:00:00 AM
  if (hours === 0) {
    hours = 12;
  }

  // update the span elements with the current time
  $("#hours").innerHTML = `${padSingleDigit(hours)} :`;
  $("#minutes").innerHTML = `${padSingleDigit(minutes)} :`;
  $("#seconds").innerHTML = padSingleDigit(seconds);
  $("#ampm").innerHTML = ampm;
  $("#greet").innerHTML = greet;
};

document.addEventListener("DOMContentLoaded", () => {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  displayCurrentTime();
  setInterval(displayCurrentTime, 1000);
});
