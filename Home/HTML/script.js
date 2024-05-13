const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "Hyper Text Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Who is making the Web standards?",
    options: ["Microsoft", "The World Wide Web Consortium", "Google"],
    answer: "The World Wide Web Consortium"
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["h6", "heading", "h1"],
    answer: "h1"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["br", "lb", "break"],
    answer: "br"
  },
  {
    question: "The HTML \'canvas\' element is used to:",
    options: ["create draggable elements", "draw graphics", "manipulate data in MySQL"],
    answer: "draw graphics"
  },
  {
    question: "An \'iframe\' is used to display a web page within a web page.",
    options: ["True", "False", "There is no such thing as an \'iframe\'"],
    answer: "True"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image:",
    options: ["src", "alt", "title"],
    answer: "alt"
  },
  {
    question: "The HTML global attribute, \'contenteditable\' is used to:",
    options: [" whether the content of an element is editable or not.", "Return the position of the first found occurrence of content inside a string", "Update content from the server"],
    answer: " whether the content of an element is editable or not."
  },
  {
    question: "in html onblur and onfocus are which attributes :",
    options: [" HTML elements", "Style attributes", "Event attributes"],
    answer: "Event attributes"
  },
  {
    question: "Graphics defined by SVG is in which format?",
    options: ["CSS", "HTML", "XML"],
    answer: "XML"
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

