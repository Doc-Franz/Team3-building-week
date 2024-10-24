let percentageCorrect = localStorage.getItem("percentageCorrect");
let isCorrect = localStorage.getItem("isCorrect");
console.log(isCorrect);
let isIncorrect = parseInt(localStorage.getItem("isIncorrect"));
let totalAnswers = parseInt(localStorage.getItem("totalAnswers"));

let percentageIncorrect = 100 - percentageCorrect;

function updateChart() {
  const circle = document.querySelector(".chart");
  const quantity = document.querySelectorAll(".quantity");
  circle.style.background = `conic-gradient(#00d8ff ${percentageCorrect}%, #ff0080 0%)`;

  const percentageText = document.querySelectorAll(".percentage");
  percentageText[0].textContent = percentageCorrect + "%";
  percentageText[1].textContent = percentageIncorrect + "%";
  quantity[0].textContent = `${isCorrect}/${totalAnswers} questions`;
  quantity[1].textContent = `${isIncorrect}/${totalAnswers} questions`;

  const resultText = document.getElementById("result");
  const detailsText = document.getElementById("blue");

  if (percentageCorrect >= 60) {
    resultText.textContent = "Congratulations!";
    detailsText.textContent = "You passed the exam.";
  } else {
    resultText.textContent = "Try again!";
    detailsText.textContent = "You did not pass.";
  }
}

updateChart();
