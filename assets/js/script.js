const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

let displayedQuestion = {};
let allowingAnswers =  true;
let scoreTotal = 0;
let questionNumber = 0;
let questionsPool = [];

let questionsArray = [
    {
        question: '“Is the dug deid?” means',
        answerA: 'Your trousers are too short',
        answerB: 'Something terrible has happened',
        answerC: 'Is the dog dead',
        answerD: 'The flag is at half mast',
        correct: 1
    },
    {
        question: 'If someone asked for some juice while at the shop they would expect',
        answerA: 'Alcohol',
        answerB: 'Fruit juice',
        answerC: 'Irn Bru',
        answerD: 'Gossip',
        correct: 3
    },
    {
        question: 'Which of the following words does not mean girl',
        answerA: 'Quine',
        answerB: 'Hen',
        answerC: 'Lassie',
        answerD: 'Loon',
        correct: 4
    },
    {
        question: '“Tea-time” is usually around',
        answerA: '8am to 10am',
        answerB: '11am to 1pm',
        answerC: '3pm to 5pm',
        answerD: '6pm to 8pm',
        correct: 4
    },
    {
        question: 'If you were “away to do some messages”, you would be',
        answerA: 'Doing some food shopping',
        answerB: 'Writing postcards',
        answerC: 'Checking your email',
        answerD: 'Going on a date',
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

startQuiz();