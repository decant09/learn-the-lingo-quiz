const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

let displayedQuestion = {};
let allowingAnswers =  true;
let scoreTotal = 0;
let questionNumber = 0;
let questionsPool = [];