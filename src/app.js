import getMicSoundLevel from './audio'
import states from './state'
import nodes from './domNodes'

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
    requestAnimationFrame(updateScreen)
}

const updateScreen = () => {
  if(!states.gameOver){    
    const containerHeight = Math.round(nodes.container.getBoundingClientRect().height)
    const characterOffsetTop = nodes.character.offsetTop
    if(soundLevel < 400 && characterOffsetTop < containerHeight - 50 ) {
        nodes.character.style.top = characterOffsetTop +4 + "px"
    } 
    else if(soundLevel > 400 && characterOffsetTop > 0){
      nodes.character.style.top = characterOffsetTop -4 + "px"
    }
    requestAnimationFrame(updateScreen)
  }
}

