import getMicSoundLevel from './audio'
import states from './state'
import nodes from './domNodes'
import createHedges from './hedges'
//always contain the latest value of microphone sound level
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
  const hedges = document.getElementsByClassName('hedge')
  for(let hedge of hedges) {
      let hedgeLeft = Math.round(hedge.getBoundingClientRect().left)
      hedgeLeft-= states.gameSpeed
      if(hedgeLeft <= -30){
        nodes.container.removeChild(hedge)
      }
      hedge.style.left = hedgeLeft + 'px'
      if(RectCircleColliding(nodes.character.getBoundingClientRect(), hedge.getBoundingClientRect())){
          states.gameOver = true 
      }

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
      nodes.score.innerHTML = states.playerScore
}
setInterval(() => {
  states.playerScore++
}, 1000)


  
  // return true if the rectangle and circle are colliding
  function RectCircleColliding(circle,rect){
      var distX = Math.abs(circle.x - rect.x-rect.width  /2);
      var distY = Math.abs(circle.y - rect.y-rect.height/2);
  
      if (distX > (rect.width/2 + 10)) { return false; }
      if (distY > (rect.height/2 + 10)) { return false; }
  
      if (distX <= (rect.width/2)) { return true; } 
      if (distY <= (rect.height/2)) { return true; }
  
      var dx=distX-rect.width/2;
      var dy=distY-rect.height/2;
      return (dx*dx+dy*dy<=(10*10)); 
}