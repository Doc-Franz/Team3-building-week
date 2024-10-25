/* 
Cosa dobbiamo fare:
fare in modo che ogni colta che il pulsante di invia risposta viene cliccato cambi la pagina con le domande.


*/

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// IMPOSTARE NUMERO DI TOTAL QUESTIONS

const defineNumberQuestion = (questions) => {
  const purpleNumber = document.querySelector(".qTotal");
  purpleNumber.textContent = questions.length;
  console.log(purpleNumber.textContent);
};

let firstQuestion = 0;

const totalAnswers = questions.map((element) => element.incorrect_answers);
totalAnswers.forEach((element, index) => element.push(questions[index].correct_answer));

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
  return array;
};
totalAnswers.forEach((element) => shuffle(element));
totalAnswers.forEach((element, index) => element.push(questions[index].question));

console.log(totalAnswers);

const generateFirstQuestion = function () {
  firstQuestion = Math.floor(Math.random() * questions.length);
  return firstQuestion;
};

const getRandomQuestions = function () {
  generateFirstQuestion();
  const extractedIndex = [firstQuestion];
  while (extractedIndex.length < questions.length) {
    const random = Math.floor(Math.random() * questions.length);

    if (!extractedIndex.includes(random)) {
      extractedIndex.push(random);
    }
  }

  return extractedIndex;
};

let j = 0;
let isCorrect = 0; // Contatore che tiene conto di quante risposte sono corrette
let percentageCorrect = (isCorrect / questions.length) * 100; // Verifica la percentuale di risposte corrette

const arrayIndex = getRandomQuestions();

insertChoice = () => {
  const choices = document.querySelectorAll(".choiceBtn");
  const questionTitle = document.querySelector("h1");
  const secondRow = document.querySelector(".secondRow");

  if (totalAnswers[arrayIndex[j]].length - 1 === 2) {
    secondRow.style.display = "none";
  } else {
    secondRow.style.display = "block";
  }

  for (let i = 0; i < totalAnswers[arrayIndex[j]].length - 1; i++) {
    choices[i].textContent = totalAnswers[arrayIndex[j]][i];
    questionTitle.textContent = totalAnswers[arrayIndex[j]].at(-1);
  }
  resetTimer();
};

// QUALE BOTTONE STO SELEZIONANDO

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const whichButtonIsSelected = () => {
  btn1.onclick = () => {
    console.log(btn1.textContent);
    if (questions[arrayIndex[j]].correct_answer === btn1.textContent) {
      // console.log("risposta esatta");
      btn1.classList.add("correct");
    }
    btn1.classList.add("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");
  };
  btn2.onclick = () => {
    console.log(btn2.textContent);
    if (questions[arrayIndex[j]].correct_answer === btn2.textContent) {
      // console.log("risposta esatta");
      btn2.classList.add("correct");
    }
    btn2.classList.add("selected");
    btn1.classList.remove("selected");
    btn3.classList.remove("selected");
    btn4.classList.remove("selected");
  };
  btn3.onclick = () => {
    console.log(btn3.textContent);
    if (questions[arrayIndex[j]].correct_answer === btn3.textContent) {
      // console.log("risposta esatta");
      btn3.classList.add("correct");
    }
    btn3.classList.add("selected");
    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn4.classList.remove("selected");
  };
  btn4.onclick = () => {
    console.log(btn4.textContent);
    if (questions[arrayIndex[j]].correct_answer === btn4.textContent) {
      // console.log("risposta esatta");
      btn4.classList.add("correct");
    }
    btn4.classList.add("selected");
    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
  };
};

// GENERAZIONE NUOVE PAGINE DI RISPOSTA

const nextQuestion = document.querySelector(".sendBtn");
const qNumber = document.getElementById("qNumber");
let lastQuestionAnswered = false;

nextQuestion.onclick = () => {
  if (lastQuestionAnswered) {
    sendLastAnswer();
    linkToResults();
    return;
  }
  if (j < totalAnswers.length - 1) {
    const isSelected = document.querySelector(".selected");
    if (isSelected.classList.contains("correct")) {
      isCorrect++;
    }
    percentageCorrect = (isCorrect / questions.length) * 100;

    localStorage.setItem("percentageCorrect", percentageCorrect);
    localStorage.setItem("isCorrect", isCorrect);
    let isIncorrect = totalAnswers.length - isCorrect;
    localStorage.setItem("isIncorrect", isIncorrect);
    localStorage.setItem("totalAnswers", totalAnswers.length);

    resetClass();

    console.log(isCorrect);
    console.log(percentageCorrect + "%");
    j++;

    insertChoice();
    qNumber.textContent = j + 1;
    if (j === totalAnswers.length - 1) {
      lastQuestionAnswered = true;
    }
  }
};

// RESET DELLE CLASSI

const resetClass = () => {
  btn1.classList.remove("selected");
  btn2.classList.remove("selected");
  btn3.classList.remove("selected");
  btn4.classList.remove("selected");
  btn1.classList.remove("correct");
  btn2.classList.remove("correct");
  btn3.classList.remove("correct");
  btn4.classList.remove("correct");
};

// INVIO ULTIMA DOMANDA

const sendLastAnswer = () => {
  nextQuestion.textContent = "SHOW RESULTS";
};

// COLLEGAMENTO ALLA PAGINA DI RESULTS

const a = document.querySelector("a[href]");

const linkToResults = () => {
  nextQuestion.onclick = () => {
    a.href = "./Results.html";
  };
};

// TIMER

const circle = document.querySelector(".circle");
const secondsDisplay = document.getElementById("seconds");
let totalSeconds = 10;
let remainingSeconds = totalSeconds;

const newP = document.createElement("p");
newP.classList.add("count-down");

const firstP = secondsDisplay.querySelector("p");
const secondP = firstP.nextElementSibling;

secondsDisplay.insertBefore(newP, secondP);

function updateTimer() {
  remainingSeconds--;
  //secondsDisplay.textContent = "tempo rimanente" + remainingSeconds + "secondi";
  newP.textContent = remainingSeconds;

  const offset = (remainingSeconds / totalSeconds) * 565; // 2 * π * r
  circle.style.strokeDashoffset = offset;

  if (remainingSeconds <= 0) {
    remainingSeconds = totalSeconds;
    insertChoice(); // Passa alla prossima domanda quando il timer arriva a 0
    j++; // Passa alla domanda successiva
    if (j < totalAnswers.length) {
      qNumber.textContent = j + 1;
    } else {
      // Se ha raggiunto la fine, manda ai risultati
      sendLastAnswer();
      linkToResults();
    }
  }
}

// RESET TIMER

function resetTimer() {
  remainingSeconds = totalSeconds;
  newP.textContent = remainingSeconds;
  const offset = (remainingSeconds / totalSeconds) * 565;
  circle.style.strokeDashoffset = offset;
}

// WINDOW ON LOAD

window.onload = () => {
  insertChoice();
  defineNumberQuestion(questions);
  whichButtonIsSelected();
  // updateTimer();
  setInterval(updateTimer, 1000);
};
