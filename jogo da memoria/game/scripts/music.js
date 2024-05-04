const musicgame  = document.getElementById("musica")
const cardsom = document.querySelector(".audio-card")
const somflip = document.querySelector(".audio-card flip")
cardsom.addEventListener("click",(event)=>{
  cardsom.classList.toggle('flip');
      if (cardsom.classList.contains("flip")) {
        musicgame.play();
      }else{
        musicgame.pause()
        musicgame.currentTime = 0
      }

    })