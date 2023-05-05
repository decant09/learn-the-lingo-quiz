var rules = document.getElementById("rulesWrapper");
var btn = document.getElementById("rulesBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    rules.style.display = "block";
};
span.onclick = function() {
    rules.style.display = "none";
};
window.onclick = function(e) {
    if (e.target == rules) {
        rules.style.display = "none";
    }
};