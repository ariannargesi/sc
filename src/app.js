import getMicSoundLevel from './audio'
import state from './state'
//always contain the latest value of microphone sound level
let soundLevel = 0
getMicSoundLevel( x => {
  if(x) 
      soundLevel = x  
})
document.addEventListener("keydown", e => {
  const keyCode = e.keyCode 
  if(keyCode === 32){
    startGame()
  }
})
const startGame = () => {
  state.gameInPlay = true 
  requestAnimationFrame(update)
}

const update = () => {
  console.log("update function")
  requestAnimationFrame(update)
}






