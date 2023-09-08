const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        correctAnswer: "4"
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-button");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.className = "choice";
        choiceButton.addEventListener("click", checkAnswer);
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
    choicesElement.innerHTML = "";
    submitButton.style.display = "none";
}

loadQuestion();
submitButton.addEventListener("click", checkAnswer);
