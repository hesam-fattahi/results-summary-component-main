"use strict";

const resultScore = document.querySelector(".score__number");

const summaryIcons = [...document.querySelectorAll(".item__icon")];
const summaryNames = [...document.querySelectorAll(".item__name")];
const summaryScore = [...document.querySelectorAll(".item__score span")];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let totalScore = 0;
    data.forEach(function (item, i) {
      summaryIcons[i].src = item.icon;
      summaryNames[i].textContent = item.category;
      summaryScore[i].textContent = item.score;
      totalScore += item.score;
    });
    resultScore.textContent = Math.round(totalScore / data.length);
  });
