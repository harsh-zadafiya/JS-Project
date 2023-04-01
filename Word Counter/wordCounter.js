"use strict";
let input = document.querySelectorAll("textarea")[0],
  charCounter = document.querySelector("#charCounter"),
  wordCounter = document.querySelector("#wordCounter");
input.addEventListener("keyup", function () {
  charCounter.innerHTML = input.value.split(" ").join("").length;

  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  if (words) {
    wordCounter.innerHTML = words.length;
  } else {
    wordCounter.innerHTML = 0;
  }
});
