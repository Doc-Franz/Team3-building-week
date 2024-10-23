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
console.log(questions);

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
};

// GENERAZIONE NUOVE PAGINE DI RISPOSTA

const nextQuestion = document.querySelector("#prova");

nextQuestion.onclick = () => {
  if (j < totalAnswers.length - 1) {
    j++;
    insertChoice();
  } else {
    console.log("Non ci sono più domande");
  }
};

window.onload = () => {
  insertChoice();
};

/*
const sendBtn = document.getElementById("sendBtn");

const nextQuestion = function () {
  sendBtn.onclick = function () {};
};

const changeQuestion = function () {
  const h1 = document.querySelector("h1");
};

*/

//console.log(h1);
