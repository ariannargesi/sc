import getMicSoundLevel from './audio'
import states from './state'
import nodes from './domNodes'
import createHedges from './hedges'
import { RectCircleColliding } from './funcs'
//always contain the latest value of microphone sound level
let intervalId 
let soundLevel = 0
getMicSoundLevel( x => {
  if(x) 
      soundLevel = Math.round(x * states.sensitivity)
})

document.addEventListener('keydown', e => {
    const key = e.keyCode 
    if(key === 32){
      startGame()
    }
})

const startGame = () => {
    if(states.gameInPlay === false) {
      nodes.startGame.style.display = 'none'
      states.gameInPlay = true 
      if(states.gameOver === false)
      intervalId = setInterval(() => {
        if(states.gameOver === true)
          clearInterval(createHedges)
        else 
        createHedges()
      }, 2000);
      requestAnimationFrame(updateScreen)
    }
}

const updateScreen = () => {
  if(!states.gameOver){    
    // get container height 
    const containerHeight = Math.round(nodes.container.getBoundingClientRect().height)
    // distance from top 
    const characterOffsetTop = nodes.character.offsetTop      
                          //if character is not touching the bottom
    if(soundLevel < 600 && soundLevel > 150 && characterOffsetTop < containerHeight - 50 && states.lock === false  ) {
        nodes.character.style.top = characterOffsetTop + states.gameSpeed *2 + "px"
    }                    // if character is not touching the top
    else if(soundLevel > 550 && characterOffsetTop > 0){
      nodes.character.style.top = characterOffsetTop - states.gameSpeed *2 + "px"
      states.lock = true 
      setTimeout(() => {
        states.lock = false 
      }, 2000)
    }
    moveHedges()
    updateScore()
    requestAnimationFrame(updateScreen)
  }
}

const moveHedges = () => {
  if(states.gameInPlay){
  const hedges = document.getElementsByClassName('hedge')
  for(let hedge of hedges) {
      let hedgeLeft = Math.round(hedge.getBoundingClientRect().left)
      hedgeLeft-= states.gameSpeed
      if(hedgeLeft <= -30){
        nodes.container.removeChild(hedge)
      }
      hedge.style.left = hedgeLeft + 'px'
      if(RectCircleColliding(nodes.character.getBoundingClientRect(), hedge.getBoundingClientRect())){
          // gameOver()
      }

  }
}
}
const updateScore = () => {
  const distances = []
  const hedges = document.getElementsByClassName('hedge')

  for(let hedge of hedges) {
    const hedgeDistanceFromLeft = hedge.offsetLeft + hedge.getBoundingClientRect().width
    const characterDistanceFromLeft = nodes.character.offsetLeft 
    const distance = hedgeDistanceFromLeft - characterDistanceFromLeft
    if(distance >= -3)
      distances.push(hedge)  
  }  
      nodes.score.innerHTML = states.playerScore
}
setInterval(() => {
  states.playerScore++
}, 1000)

const reStart = () => {
  states.playerScore = 0
  states.gameSpeed = 3
  states.gameInPlay = false
  states.gameOver = false
  states.lock = false 
  nodes.startGame.style.display = 'none'
  clearInterval(intervalId)
  // clear screen
  const hedges = document.getElementsByClassName('hedge')
  for(let hedge of hedges)
    nodes.container.removeChild(hedge)  
  startGame()  
}

const gameOver = () => {
  states.gameOver = true 
  states.gameInPlay = false 
  nodes.startGame.innerHTML = "<p class='start-game-text'>Game Over</p>"
  const restart = document.createElement('button')
  restart.setAttribute('class', 'restart')
  restart.addEventListener('click', reStart)
  restart.innerText = "Try Again"
  const score = document.createElement('p')
  score.innerText = 'You Score is: ' + states.playerScore

  nodes.startGame.appendChild(restart)
  nodes.startGame.appendChild(score)
  nodes.startGame.style.display = "flex"
}