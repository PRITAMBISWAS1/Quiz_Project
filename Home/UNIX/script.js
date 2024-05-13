const questions = [
  {
    question: "What command is used to list the files in a directory in UNIX?",
    options: ["ls", "dir", "list"],
    answer: "ls"
  },
  {
    question: "Which command is used to change the ownership of a file or directory in UNIX?",
    options: ["chown", "chmod", "own"],
    answer: "chown"
  },
  {
    question: "In UNIX, what command is used to display the manual page for a given command?",
    options: ["help", "man", "info"],
    answer: "man"
  },
  {
    question: "Which command is used to display the current working directory in UNIX?",
    options: ["pwd", "cwd", "dir"],
    answer: "pwd"
  },
  {
    question: "What command is used to create a new directory in UNIX?",
    options: ["mkdir", "newdir", "makedir"],
    answer: "mkdir"
  },
  {
    question: "In UNIX, what command is used to remove files or directories?",
    options: ["del", "remove", "rm"],
    answer: "rm"
  },
  {
    question: "Which command is used to change permissions of a file or directory in UNIX?",
    options: ["chown", "chmod", "perm"],
    answer: "chmod"
  },
  {
    question: "In UNIX, what command is used to display the last few lines of a file?",
    options: ["head", "last", "tail"],
    answer: "tail"
  },
  {
    question: "What command is used to find a file in UNIX?",
    options: ["locate", "search", "find"],
    answer: "find"
  },
  {
    question: "Which command is used to terminate a process in UNIX?",
    options: ["stop", "terminate", "kill"],
    answer: "kill"
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

