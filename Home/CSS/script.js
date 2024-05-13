const questions = [
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "color", "font-color"],
    answer: "color"
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: ["padding", "spacing", "margin"],
    answer: "margin"
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["bold", "text-style", "font-weight"],
    answer: "font-weight"
  },
  {
    question: "Which CSS property is used to specify the background color of an element?",
    options: ["color", "background-color", "bg-color"],
    answer: "background-color"
  },
  {
    question: "Which CSS property is used to create rounded corners?",
    options: ["border-radius", "rounded-corners", "corner-style"],
    answer: "border-radius"
  },
  {
    question: "Which CSS property is used to make an element float to the right or left?",
    options: ["float", "align", "position"],
    answer: "float"
  },
  {
    question: "Which CSS property is used to add shadow to text?",
    options: ["text-shadow", "shadow", "box-shadow"],
    answer: "text-shadow"
  },
  {
    question: "Which CSS property is used to make elements appear on top of each other?",
    options: ["stack", "z-index", "top"],
    answer: "z-index"
  },
  {
    question: "Which CSS property is used to create transitions between two states?",
    options: ["change", "transition", "animate"],
    answer: "transition"
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

