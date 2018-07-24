var EGGPLANT = '🍆';
var PEACH = '🍑';

var POSITIVE_POINTS = 5;
var NEGATIVE_POINTS = -3;
var CHANGE_RATES = [5000, 4000, 3000, 2000];
var INITIAL_MOVE_RATE = 2000;

var score = 0;
var activeEmoji = EGGPLANT; 

var changeRate;

function createNewPosition() {
    var x_max = window.innerWidth;
    var y_max = window.innerHeight - 64;

    var newX = Math.round(Math.random() * x_max);
    var newY = Math.round(Math.random() * y_max);

    document.getElementById('activeButton').setAttribute('style', 'margin-left: ' + newX + "px; margin-top: " + newY + "px");
}

function updateSpeed() {
    window.clearInterval(changeActiveEmoji);
    window.setInterval(changeActiveEmoji, changeRate);
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = "Score: " + score;
    var expectedChangeRate;
    if (score <= 50) {
        expectedChangeRate = CHANGE_RATES[0];
    } else if (score > 50 && score <= 100) {
        expectedChangeRate = CHANGE_RATES[1];
    } else if (score > 100 && score <= 200) {
        expectedChangeRate = CHANGE_RATES[2];
    } else if (score > 200) {
        expectedChangeRate = CHANGE_RATES[3];
    }
    if (expectedChangeRate != changeRate) {
        updateSpeed();
    }
}

function changeActiveEmoji() {
    activeEmoji = Math.round(Math.random()) === 1 ? EGGPLANT : PEACH;
    document.getElementById('activeEmoji').innerText = activeEmoji;
}

function changeButtonEmoji() {
    var buttonEmoji = Math.round(Math.random()) === 1 ? EGGPLANT : PEACH
    document.getElementById('activeButton').value = buttonEmoji;
    createNewPosition();
}

function clickHandler() {
    document.getElementById('activeButton').value === activeEmoji ? score += POSITIVE_POINTS : score += NEGATIVE_POINTS;
    changeButtonEmoji();
    updateScoreDisplay();
}

function onloaded() {
    console.log('I loaded');
    changeRate = CHANGE_RATES[0];
    window.setInterval(changeActiveEmoji, changeRate);
    window.setInterval(changeButtonEmoji, INITIAL_MOVE_RATE);
}


