const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionNumberValue = document.getElementById('question-number');
const scoreTotalValue = document.getElementById('score-total');

let displayedQuestion = {};
let allowingAnswers =  false;
let scoreTotal = 0;
let questionNumber = 0;
let questionsPool = [];
// number of questions in the quiz
const quizLength = 5;

const toggleIcon = document.querySelector(".toggle-icon");
// dark mode toggle
toggleIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    var mode;
    if(document.body.classList.contains('dark')){
        toggleIcon.firstElementChild.className = 'far fa-moon';
        mode = "DARK";
    }else{
        toggleIcon.firstElementChild.className = 'far fa-sun';
        mode = "LIGHT";
    }
    localStorage.setItem('pageMode', JSON.stringify(mode));
    
});

setInterval(function() {
    let getMode = JSON.parse(localStorage.getItem('pageMode'));
    if (getMode === 'DARK') {
    document.body.classList = 'dark';
    }else{
    document.body.classList = '';
    }
}, 5);

function startQuiz() {
    questionNumber = 0;
    scoreTotal = 0;
    // create an array from the questions.js file
    questionsPool = [...questionsArray];
    getNextQuestion();
}

function getNextQuestion() {
    // open quiz_over.html if no questions left or questionNumber >=5 & store score in localStorage
    if(questionsPool.length === 0 || questionNumber >= quizLength) {
        localStorage.setItem('currentPlayerResult', scoreTotal);
        return window.location.assign('quiz_over.html');
    }
    // increment question number by 1
    questionNumber++;
    questionNumberValue.innerText = `${questionNumber}/${quizLength}`;
    // randomise the question displayed
    const questionIndex = Math.floor(Math.random() * questionsPool.length);
    displayedQuestion = questionsPool[questionIndex];
    question.innerText = displayedQuestion.question;
    // display the answers
    answers.forEach(function(answer) {
        const number = answer.dataset.option;
        answer.innerText = displayedQuestion["answer" + number];
    });
    // take out the question just used so it's not used again & allow user to answer
    questionsPool.splice(questionIndex, 1);
    allowingAnswers =  true;
}
// add click event if allowing answers
answers.forEach(function(answer) {
    answer.addEventListener('click', function(e) {
        if (!allowingAnswers) return;

        allowingAnswers = false;
        const chosenOption = e.target;
        const chosenAnswer = chosenOption.dataset.option;
        // assign class if answer is correct or not
        let assignClass = 'incorrect';
            if (chosenAnswer == displayedQuestion.correctAnswer) {
                assignClass = 'correct';
            }

            if(assignClass === 'correct') {
                increaseScore(20);
            }
        // remove class after 1000ms so not applied when new answer option displayed
        chosenOption.parentElement.classList.add(assignClass);
        setTimeout( function() {
            chosenOption.parentElement.classList.remove(assignClass);
            getNextQuestion();
        }, 1000);
    });
});
// increase score
increaseScore = function(num) {
    scoreTotal += num;
    scoreTotalValue.innerText = scoreTotal;
};

// startQuiz();
if (typeof questionsArray !== 'undefined') {
    startQuiz();
}