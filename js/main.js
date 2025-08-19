"use strict";

$("#open").on("click", function () {
  $(".bg-dark").animate({ width: "toggle" }, 1000);
  console.log("he");
});

// singers section
$(".singerOne").on("click", function () {
  $("#One").slideToggle(500);
});

$(".singerTwo").on("click", function () {
  $("#Two").slideToggle(500);
});

$(".singerThree").on("click", function () {
  $("#Three").slideToggle(500);
});

$(".singerFour").on("click", function () {
  $("#Four").slideToggle(500);
});

// $(body).on("load", function () {

// });
// text area

let myArea = document.querySelector("textarea");

myArea.addEventListener("input", function () {
  let maxChars = 100;
  let currChars = myArea.value.length;

  let remain = maxChars - currChars;

  let chars = document.getElementById("chars");
  chars.innerHTML = remain;
  if (currChars > maxChars) {
    alert(`You cannot enter more than 100 Character`);
    myArea.value = null;
  }
});

// days counter

let dayCounter = new Date("Mar 17 ,2026 , 12:00:00").getTime();
// console.log(dayCounter);

let counter = setInterval(function () {
  let currDate = new Date().getTime();

  let dateBtw = dayCounter - currDate;

  let daysTo = Math.floor(dateBtw / (1000 * 60 * 60 * 24));

  let hours = Math.floor((dateBtw % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minute = Math.floor((dateBtw % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((dateBtw % (1000 * 60)) / 1000);
  // console.log(seconds);

  document.getElementById("days").innerText = daysTo + " Days";
  document.getElementById("hours").innerText = hours + " Hours";
  document.getElementById("min").innerText = minute + " Minutes";
  document.getElementById("sec").innerText = seconds + " Seconds";
}, 1000);


