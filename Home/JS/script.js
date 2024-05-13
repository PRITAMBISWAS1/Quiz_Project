const questions = [
  {
    question: "What is the output of the following code: console.log(typeof null);",
    options: ["null", "object", "undefined"],
    answer: "object"
  },
  {
    question: "What is the correct way to check if a variable 'x' is equal to 5 in JavaScript?",
    options: ["x == 5", "x === 5", "x = 5"],
    answer: "x === 5"
  },
  {
    question: "Which keyword is used to declare variables in JavaScript?",
    options: ["var", "int", "string"],
    answer: "var"
  },
  {
    question: "What method would you use to add an element to the end of an array?",
    options: ["push()", "pop()", "splice()"],
    answer: "push()"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Model", "Digital Object Model"],
    answer: "Document Object Model"
  },
  {
    question: "What does JSON stand for?",
    options: ["JavaScript Object Notation", "JavaScript Object Networking", "JavaScript Output Notation"],
    answer: "JavaScript Object Notation"
  },
  {
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    options: ["To enable strict mode", "To disable strict mode", "To print a message to the console"],
    answer: "To enable strict mode"
  },
  {
    question: "What is the result of 5 + '3' in JavaScript?",
    options: ["8", "53", "TypeError"],
    answer: "53"
  },
  {
    question: "Which built-in method returns the length of the string?",
    options: ["length()", "size()", "getSize()"],
    answer: "length()"
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: ["Refers to the current object", "Refers to the parent object", "Refers to the global object"],
    answer: "Refers to the current object"
  }

];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = 0; // Variable to track the number of answered questions

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const progressElement = document.getElementById('progress');

  questionElement.innerHTML = questions[currentQuestion].question;
  
  optionsElement.innerHTML = "";
  for (let option of questions[currentQuestion].options) {
    optionsElement.innerHTML += `
      <label class="option">
        <input type="radio" name="option" value="${option}" hidden>
        ${option}
      </label>
    `;
  }
  progressElement.innerHTML = `${currentQuestion + 1}/${questions.length}`;
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    const selectedValue = selectedOption.value;
    if (selectedValue === questions[currentQuestion].answer) {
      score++;
    }
    answeredQuestions++; // Increment answeredQuestions counter
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      enableSubmitButton();
    }
  } else {
    alert("Please select an option.");
  }
}

function enableSubmitButton() {
  const submitButton = document.getElementById('submit');
  submitButton.disabled = false;
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

function skipQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    submitQuiz();
  }
}

function submitQuiz() {
  const pageStyle = document.getElementById('mainStyle');
  // Hide or remove unnecessary elements
  pageStyle.style.display = "none";

  // Display result and retry button
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Quiz completed! Your score: ${score}/${answeredQuestions}`;
  resultElement.style.display = "inline-block";
  
  const retryButton = document.getElementById('retry');
  retryButton.style.display = "inline-block";

  // Reset variables
  currentQuestion = 0;
  score = 0;
  answeredQuestions = 0;
}

const submitButton = document.getElementById('submit');

function enableSubmitButton() {
  submitButton.disabled = false;
}

function retryQuiz() {
  const pageStyle = document.getElementById('mainStyle');
  // Display necessary elements
  pageStyle.style.display = "block";

  // Reset variables
  currentQuestion = 0;
  score = 0;
  answeredQuestions = 0;

  // Reset result and retry button
  const resultElement = document.getElementById('result');
  resultElement.style.display = "none";
  
  const retryButton = document.getElementById('retry');
  retryButton.style.display = "none";
  
  // Enable submit button
  submitButton.disabled = true;

  // Display the first question
  displayQuestion();
}

function disableSubmitButton() {
  const submitButton = document.getElementById('submit');
  submitButton.disabled = true;
}

displayQuestion();

