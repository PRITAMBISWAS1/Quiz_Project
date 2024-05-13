const questions = [
  {
    question: "Which of the following is NOT a valid C variable name?",
    options: ["_variable", "12variable", "variable_name"],
    answer: "12variable"
  },
  {
    question: "What is the size of 'int' data type in bytes?",
    options: ["2", "4", "8"],
    answer: "4"
  },
  {
    question: "Which of the following is NOT a valid C keyword?",
    options: ["for", "while", "loop"],
    answer: "loop"
  },
  {
    question: "What is the correct way to declare a constant in C?",
    options: ["const int CONSTANT = 5;", "int constant = 5;", "#define CONSTANT 5"],
    answer: "const int CONSTANT = 5;"
  },
  {
    question: "What is the output of the following code?\nint x = 5;\nprintf(\"%d\", x++);",
    options: ["5", "6", "Compiler Error"],
    answer: "5"
  },
  {
    question: "Which symbol is used for a single line comment in C?",
    options: ["//", "/*", "#"],
    answer: "//"
  },
  {
    question: "What does the 'sizeof' operator return in C?",
    options: ["Memory address of a variable", "Size of a variable in bytes", "Value of a variable"],
    answer: "Size of a variable in bytes"
  },
  {
    question: "What is the output of the following code?\nprintf(\"%d\", sizeof(float));",
    options: ["2", "4", "8"],
    answer: "4"
  },
  {
    question: "Which header file is needed for using the 'malloc' function in C?",
    options: ["<stdio.h>", "<stdlib.h>", "<math.h>"],
    answer: "<stdlib.h>"
  },
  {
    question: "What is the correct syntax for the 'ternary operator' in C?",
    options: ["condition ? value1 : value2", "condition | value1 | value2", "condition :: value1 : value2"],
    answer: "condition ? value1 : value2"
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

