const questions = [
  {
    question: "What is encapsulation in OOP?",
    options: ["Binding data members and member functions into a single unit", "Hiding the complexity of the code", "Inheriting properties and behavior from a parent class"],
    answer: "Binding data members and member functions into a single unit"
  },
  {
    question: "What is inheritance in OOP?",
    options: ["Process of creating a new class from an existing class", "Creating multiple instances of a class", "Encapsulating data and methods within a class"],
    answer: "Process of creating a new class from an existing class"
  },
  {
    question: "What is polymorphism in OOP?",
    options: ["Ability to take multiple forms", "Restricting access to certain properties or methods", "Defining multiple constructors for a class"],
    answer: "Ability to take multiple forms"
  },
  {
    question: "Which keyword is used to create a new instance of a class?",
    options: ["this", "new", "class"],
    answer: "new"
  },
  {
    question: "What is a constructor in JavaScript?",
    options: ["A method used to perform actions on objects", "A special method for creating and initializing objects", "A function used to access private members"],
    answer: "A special method for creating and initializing objects"
  },
  {
    question: "Which keyword is used to define a class in JavaScript?",
    options: ["class", "function", "object"],
    answer: "class"
  },
  {
    question: "What is the purpose of the 'extends' keyword in class inheritance?",
    options: ["To implement multiple inheritance", "To extend the properties and methods of a parent class", "To override methods in a subclass"],
    answer: "To extend the properties and methods of a parent class"
  },
  {
    question: "What does the 'super' keyword refer to in a subclass constructor?",
    options: ["The current instance of the class", "The child class constructor" , "The parent class constructor"],
    answer: "The parent class constructor"
  },
  {
    question: "What is the main advantage of using OOP?",
    options: ["Simpler code structure", "Improved code reusability", "Faster execution speed"],
    answer: "Improved code reusability"
  },
  {
    question: "What is an abstract class in JavaScript?",
    options: ["A class that cannot be instantiated and is used as a base for other classes", "A class with only static methods", "A class that does not have any properties"],
    answer: "A class that cannot be instantiated and is used as a base for other classes"
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

