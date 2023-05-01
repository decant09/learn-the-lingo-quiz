const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionNumberValue = document.getElementById('question-number');
const scoreTotalValue = document.getElementById('score-total');

let displayedQuestion = {};
let allowingAnswers =  false;
let scoreTotal = 0;
let questionNumber = 0;
let questionsPool = [];

const quizLength = 5;

const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark')
    ? (toggleIcon.firstElementChild.className = 'far fa-moon')
    : (toggleIcon.firstElementChild.className = 'far fa-sun');
});

function startQuiz() {
    questionNumber = 0;
    scoreTotal = 0;
    questionsPool = [...questionsArray];
    getNextQuestion();
}

function getNextQuestion() {
    if(questionsPool.length === 0 || questionNumber >= quizLength) {
        localStorage.setItem('currentPlayerResult', scoreTotal);
        return window.location.assign('quiz_over.html');
    };
    questionNumber++;
    questionNumberValue.innerText = `${questionNumber}/${quizLength}`;

    const questionIndex = Math.floor(Math.random() * questionsPool.length);
    displayedQuestion = questionsPool[questionIndex];
    question.innerText = displayedQuestion.question;

    answers.forEach(function(answer) {
        const number = answer.dataset["option"];
        answer.innerText = displayedQuestion["answer" + number];
    });

    questionsPool.splice(questionIndex, 1);
    allowingAnswers =  true;
};

answers.forEach(function(answer) {
    answer.addEventListener('click', function(e) {
        if (!allowingAnswers) return;

        allowingAnswers = false;
        const chosenOption = e.target;
        const chosenAnswer = chosenOption.dataset["option"];

        let assignClass = 'incorrect';
            if (chosenAnswer == displayedQuestion.correctAnswer) {
                assignClass = 'correct';
            };

            if(assignClass === 'correct') {
                increaseScore(20);
            }
        
        chosenOption.parentElement.classList.add(assignClass);
        setTimeout( function() {
            chosenOption.parentElement.classList.remove(assignClass);
            getNextQuestion();
        }, 1000);
    });
});

increaseScore = function(num) {
    scoreTotal += num;
    scoreTotalValue.innerText = scoreTotal;
};

startQuiz();