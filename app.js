//selecting all the required elements 
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const select = document.querySelector('#playto')
const form = document.querySelector('#name')

let winningScore = 3
//setting the initial winningScore to be 3
let p1Score = 0
let p2Score = 0
let isGameOver = false

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1
        if (p1Score === winningScore) {
            isGameOver = true
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p1Display.textContent = p1Score
    }

})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1
        if (p2Score === winningScore) {
            isGameOver = true
            p1Display.classList.add('has-text-danger')
            p2Display.classList.add('has-text-success')
            p1Button.disabled = true
            p2Button.disabled = true
        }
        p2Display.textContent = p2Score
    }

})
//score keeps increamenting as long as isGameover is false and if the score is equal to the winningScore,IsGameover is set to true and the game stops

//sets the winningScore chosen by the user
select.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset()
})

//form used to enter the player's names
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const p1Name = form.elements.p1Name
    const p2Name = form.elements.p2Name
    addName(p1Name.value, p2Name.value)
    p1Name.value = ''
    p2Name.value = ''

})




function addName() {
    p1Button.textContent = p1Name.value
    p2Button.textContent = p2Name.value
}

//reset button resets all the player's scores and names to default values
resetButton.addEventListener('click', () => {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false
    p2Button.disabled = false
    p1Button.textContent = 'Player 1'
    p2Button.textContent = 'Player 2'
    select.value = 3
})

function reset() {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false
    p2Button.disabled = false

}
