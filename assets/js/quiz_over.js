const playerName = document.getElementById('player-name');
const save = document.getElementById('save');
const currentPlayerResult = localStorage.getItem('currentPlayerResult');
const scoreResult = document.getElementById('score-result');

const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

const leaderboardDisplayMax = 3;

scoreResult.innerText = `You scored: ${currentPlayerResult}`;

playerName.addEventListener('keyup', function() {
    save.disabled = !playerName.value
})

saveResult = function(e) {
    e.preventDefault();

    const result = {
        result: currentPlayerResult,
        name: playerName.value
    };
    leaderboard.push(result);
    leaderboard.sort(function(a, b) {
        return b.result - a.result;
    });
    leaderboard.splice(3);
    
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    window.location.assign('index.html');
};