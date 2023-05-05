const currentPlayerResult = localStorage.getItem('currentPlayerResult');
const scoreResult = document.getElementById('score-result');
const resultMessage = document.getElementById('message');
// display the result from localStorage
scoreResult.innerText = `You scored: ${currentPlayerResult}/100`;
// display particular message based on result
function message() {
    if(currentPlayerResult >= 100){
        resultMessage.innerHTML = (`<h2>Well done! You're a local!</h2>`);
    } else if(currentPlayerResult >50 && currentPlayerResult < 100){
        resultMessage.innerHTML = (`<h2>Good effort! Just a wee bit more practice!</h2`);
    } else{
        resultMessage.innerHTML = (`<h2>Room to improve! Dinna worry, try again.</h2>`);
    }
}

message();
