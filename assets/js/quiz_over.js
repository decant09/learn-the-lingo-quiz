const currentPlayerResult = localStorage.getItem('currentPlayerResult');
const scoreResult = document.getElementById('score-result');
const resultMessage = document.getElementById('message');

scoreResult.innerText = `You scored: ${currentPlayerResult}`;

function message() {
    if(currentPlayerResult >= 100){
        resultMessage.innerHTML = (`<h2>Well done!</h2>`);
    } else if(currentPlayerResult >30 && currentPlayerResult < 100){
        resultMessage.innerHTML = (`<h2>Could do better...</h2`);
    } else{
        resultMessage.innerHTML = (`<h2>Shocking!</h2>`);
    }
}

message();
