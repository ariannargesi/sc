import getMicSoundLevel from './audio'

let soundLevel = 0
getMicSoundLevel( x => {
  if(x) 
      soundLevel = x  
})

