import getMicSoundLevel from './audio'
import states from './state'
import nodes from './domNodes'
import createHedges from './hedges'
//always contain the latest value of microphone sound level
let soundLevel = 0
getMicSoundLevel( x => {
  if(x) 
      soundLevel = x * states.sensitivity
})

document.addEventListener('keydown', e => {
    const key = e.keyCode 
    if(key === 32){
      startGame()
    }
})

const startGame = () => {
    states.gameInPlay = true 
    createHedges()
    requestAnimationFrame(updateScreen)
}

const updateScreen = () => {
  if(!states.gameOver){    
    // get container height 
    const containerHeight = Math.round(nodes.container.getBoundingClientRect().height)
    // distance from top 
    const characterOffsetTop = nodes.character.offsetTop
                          //if character is not touching the bottom
    if(soundLevel < 400 && characterOffsetTop < containerHeight - 50 ) {
        nodes.character.style.top = characterOffsetTop +4 + "px"
    }                    // if character is not touching the top
    else if(soundLevel > 400 && characterOffsetTop > 0){
      nodes.character.style.top = characterOffsetTop -4 + "px"
    }
    moveHedges()
    updateScore()
    requestAnimationFrame(updateScreen)
  }
}

const moveHedges = () => {
  const hedges = document.getElementsByClassName('hedge')
  for(let hedge of hedges) {
      let hedgeLeft = Math.round(hedge.getBoundingClientRect().left)
      hedgeLeft-= 2
      if(hedgeLeft <= -30){
        nodes.container.removeChild(hedge)
      }
      hedge.style.left = hedgeLeft + 'px'
  }
}
const updateScore = () => {
  const distances = []
  const hedges = document.getElementsByClassName('hedge')

  for(let hedge of hedges) {
    const hedgeDistanceFromLeft = hedge.offsetLeft + 30 
    const characterDistanceFromLeft = nodes.character.offsetLeft 
    const distance = hedgeDistanceFromLeft - characterDistanceFromLeft
    if(distance >= -3)
      distances.push(hedge)  
  }

  if(distances.length){
    if(distances[0].offsetLeft+30 < nodes.character.offsetLeft) {
      states.playerScore++
      nodes.score.innerHTML = states.playerScore
    }
    }
}