const playerName = document.getElementById('player-name');
const save = document.getElementById('save');
const currentPlayerResult = localStorage.getItem('currentPlayerResult');
const scoreResult = document.getElementById('score-result');

scoreResult.innerText = `You scored: ${currentPlayerResult}`;

playerName.addEventListener('keyup', function() {
    save.disabled = !playerName.value
})

saveResult = function(e) {
    console.log("clicked");
    e.preventDefault();
};