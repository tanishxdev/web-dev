// Quiz data: questions, options, correct answer index
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctIndex: 0,
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correctIndex: 2,
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    correctIndex: 3,
  },
];

// State variables
let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

restartButton.addEventListener("click", () => {
  restartQuiz();
});
// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
  // Clear old options
  optionsContainer.innerHTML = "";

  // Get current question data
  const currentQuestion = quizData[currentQuestionIndex];

  // Update question text
  questionText.textContent = currentQuestion.question;

  // Create option buttons
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;

    // When option is clicked
    button.addEventListener("click", () => {
      handleAnswer(index);
    });

    optionsContainer.appendChild(button);
  });
}

// Handle answer selection
function handleAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].correctIndex;

  if (selectedIndex === correctIndex) {
    score++;
  }

  // Move to next question
  currentQuestionIndex++;

  // Check if quiz is over
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Attach event listener to restart button
restartButton.addEventListener("click", restartQuiz);

// Show final result
function showResult() {
  questionText.textContent = `Quiz finished! Your score is ${score}/${quizData.length}`;
  optionsContainer.innerHTML = "";

  // Hide next button
  nextButton.style.display = "none";

  // Show restart button
  restartButton.style.display = "block";
}

// Restart quiz logic
function restartQuiz() {
  // Reset state
  currentQuestionIndex = 0;
  score = 0;

  // Restore buttons
  nextButton.style.display = "block";
  restartButton.style.display = "none";

  // Load first question again
  loadQuestion();
}