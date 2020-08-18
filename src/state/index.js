// contain the current state of the game
const states = {
    playerScore: 0,
    gameSpeed: 3,
    gameInPlay: false,
    gameOver: false,
    sensitivity: 0.03,
    lock: false,
    lockDown: true,
}
setInterval(() => {
    states.gameSpeed++
    console.log(states.gameSpeed)
}, 10000)
export default states
