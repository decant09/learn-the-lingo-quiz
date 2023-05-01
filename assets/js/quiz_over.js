const currentPlayerResult = localStorage.getItem('currentPlayerResult');
const scoreResult = document.getElementById('score-result');

scoreResult.innerText = `You scored: ${currentPlayerResult}`;