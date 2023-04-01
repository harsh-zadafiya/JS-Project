// Readability (Mashape) API Key for testing: PQ4FOFuaR6mshI6qpnQKQvkDZQXjp1o6Zcqjsnug7GvNggTzUE

"use strict";
let input = document.querySelectorAll("textarea")[0],
  charCounter = document.querySelector("#charCounter"),
  wordCounter = document.querySelector("#wordCounter");
input.addEventListener("keyup", function () {
  //keeping the console clean to make only the latest data visible

  charCounter.innerHTML = input.value.split(" ").join("").length;

  // \b is word boundary metacharacter
  var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
  // console.log(words);
  if (words) {
    wordCounter.innerHTML = words.length;
  } else {
    wordCounter.innerHTML = 0;
  }
});
