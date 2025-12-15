const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
        
    }
];

let currentQuestionIndex = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('nextButton');
const feedback = document.getElementById('feedback');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.answers.map((answer, index) => `
                <li>
                    <button class="answerButton" data-index="${index}">${answer}</button>
                </li>`).join('')}
        </ul>
    `;
    
    const answerButtons = document.querySelectorAll('.answerButton');
    answerButtons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(event) {
    const selectedAnswerIndex = event.target.dataset.index;
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedAnswerIndex == currentQuestion.correct) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! The correct answer was: " + currentQuestion.answers[currentQuestion.correct];
        feedback.style.color = "red";
    }

    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    feedback.textContent = '';
    nextButton.classList.add('hidden');

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        quizContainer.innerHTML = "<h2>Quiz Completed!</h2><p>Thank you for participating!</p>";
        nextButton.classList.add('hidden');
    }
});

// Initialize the quiz
displayQuestion();
