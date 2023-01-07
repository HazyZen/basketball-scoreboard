let scoreEl = document.getElementById('score-el');
let saveEl = document.getElementById('save-el')
let score = 0;

function plusOne() {
    score += 1
    scoreEl.textContent = score;
}

function plusTwo() {
    score += 2
    scoreEl.textContent = score;
}

function plusThree() {
    score += 3
    scoreEl.textContent = score;
}

function saveBtn() {
    let scoreStr = score + ' - '
    saveEl.textContent += scoreStr
    scoreEl.textContent = 0
    score = 0;
}