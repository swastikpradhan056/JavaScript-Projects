import confetti from "https://cdn.skypack.dev/canvas-confetti";

const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue Whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffee",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
      },
      {
        text: "Australia",
        correct: true,
      },
      {
        text: "Africa",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
      },
      {
        text: "Switzerland",
        correct: false,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Sri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: true,
      },
    ],
  },
  {
    question: 'Which continent is known as the "Land of the Rising Sun"?',
    answers: [
      {
        text: "Africa",
        correct: false,
      },
      {
        text: "Asia",
        correct: true,
      },
      {
        text: "Europe",
        correct: false,
      },
      {
        text: "South America",
        correct: false,
      },
    ],
  },
  {
    question: "In which year did Christopher Columbus reach the Americas?",
    answers: [
      {
        text: "1492",
        correct: true,
      },
      {
        text: "1607",
        correct: false,
      },
      {
        text: "1776",
        correct: false,
      },
      {
        text: "1848",
        correct: false,
      },
    ],
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      {
        text: "Jane Austen",
        correct: false,
      },
      {
        text: "Charles Dickens",
        correct: false,
      },
      {
        text: "F.Scott Fitzgerald",
        correct: false,
      },
      {
        text: "William Shakespeare",
        correct: true,
      },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      {
        text: "H2O",
        correct: true,
      },
      {
        text: "CO2",
        correct: false,
      },
      {
        text: "O2",
        correct: false,
      },
      {
        text: "NaCl",
        correct: false,
      },
    ],
  },
  {
    question: "What is the height of the Mt. Everest?",
    answers: [
      {
        text: "8846",
        correct: false,
      },
      {
        text: "8858",
        correct: false,
      },
      {
        text: "8849",
        correct: false,
      },
      {
        text: "8848",
        correct: true,
      },
    ],
  },
  {
    question: "Who is the G.O.A.T (Greatest Of All Time) in Football?",
    answers: [
      {
        text: "Ronaldino Gaucho",
        correct: false,
      },
      {
        text: "Ronaldo Nazario De Lima",
        correct: false,
      },
      {
        text: "Cristiano Ronaldo",
        correct: false,
      },
      {
        text: "Lionel Messi",
        correct: true,
      },
    ],
  },
  {
    question:
      "Which country won the FIFA World Cup 2022 which was held in Qatar?",
    answers: [
      {
        text: "France",
        correct: false,
      },
      {
        text: "Brazil",
        correct: false,
      },
      {
        text: "Argentina",
        correct: true,
      },
      {
        text: "Portugal",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which player won the Golden Ball (Best Player Award) in the FIFA World Cup 2022?",
    answers: [
      {
        text: "Kylian Mbappe",
        correct: false,
      },
      {
        text: "Lionel Messi",
        correct: true,
      },
      {
        text: "Cristiano Ronaldo",
        correct: false,
      },
      {
        text: "Neymar Jr",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHtml = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  if (score === questions.length) {
    questionElement.innerHTML = ` Congratulations! You Scored all the ${score} out of ${questions.length}!`;
    confetti();
  } else {
    if (score < questions.length && score >= questions.length - 4) {
      questionElement.innerHTML = ` Congratulations! You Scored ${score} out of ${questions.length}!`;
    } else if (score < questions.length - 4 && score >= questions.length - 6) {
      questionElement.innerHTML = ` Not Bad! You Scored ${score} out of ${questions.length}!`;
    } else if (score < questions.length - 6 && score >= questions.length - 11) {
      questionElement.innerHTML = ` OOPSY! You Only Scored ${score} out of ${questions.length}!`;
    } else if (score === 0) {
      questionElement.innerHTML = ` Uh Oh! You Got All The Questions Wrong! Try Again Next Time.`;
    }
  }

  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
