let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let hScore = 0
let gScore = 0

function hAddOne() {
    hScore += 1
    homeScore.textContent = hScore
}

function hAddTwo() {
    hScore += 2
    homeScore.textContent = hScore
}

function hAddThree() {
    hScore += 3
    homeScore.textContent = hScore
}

function gAddOne() {
    gScore += 1
    guestScore.textContent = gScore
}

function gAddTwo() {
    gScore += 2
    guestScore.textContent = gScore
}

function gAddThree() {
    gScore += 3
    guestScore.textContent = gScore
}