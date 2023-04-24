const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

let displayedQuestion = {};
let allowingAnswers =  false;
let scoreTotal = 0;
let questionNumber = 0;
let questionsPool = [];

let questionsArray = [
    {
        question: '“Is the dug deid?” means',
        answer1: 'Your trousers are too short',
        answer2: 'Something terrible has happened',
        answer3: 'Is the dog dead',
        answer4: 'The flag is at half mast',
        correct: 1
    },
    {
        question: 'If someone asked for some juice while at the shop they would expect',
        answer1: 'Alcohol',
        answer2: 'Fruit juice',
        answer3: 'Irn Bru',
        answer4: 'Gossip',
        correct: 3
    },
    {
        question: 'Which of the following words does not mean girl',
        answer1: 'Quine',
        answer2: 'Hen',
        answer3: 'Lassie',
        answer4: 'Loon',
        correct: 4
    },
    {
        question: '“Tea-time” is usually around',
        answer1: '8am to 10am',
        answer2: '11am to 1pm',
        answer3: '3pm to 5pm',
        answer4: '6pm to 8pm',
        correct: 4
    },
    {
        question: 'If you were “away to do some messages”, you would be',
        answer1: 'Doing some food shopping',
        answer2: 'Writing postcards',
        answer3: 'Checking your email',
        answer4: 'Going on a date',
        correct: 1
    } 
]

const quizLength = 5;

function startQuiz() {
    questionNumber = 0;
    scoreTotal = 0;
    questionsPool = [...questionsArray];
    getNextQuestion();
}

function getNextQuestion() {
    questionNumber++;
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
        console.log(e.target)
    });
});

startQuiz();