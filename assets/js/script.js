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
]

const quizLength = 5;

startQuiz = () => {
    questionNumber = 0;
    scoreTotal = 0;
    questionsPool = [...questionsArray]
    console.log(questionsPool);
    getNextQuestion();
}



startQuiz();