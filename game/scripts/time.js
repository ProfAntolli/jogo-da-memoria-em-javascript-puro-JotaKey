const starC = document.querySelector(".start-card");
const seconds = document.getElementById("second");
const fundostart = document.querySelector(".back-start");

var p1,p2
var z = 0

function flipCard(){
  this.classList.toggle('flip');
}
starC.addEventListener("mouseover", (event)=>{
  starC.classList.toggle('flip');
})

starC.addEventListener("mouseout", (event)=>{
  starC.classList.toggle('flip');
})

starC.addEventListener("click", (event)=>{
      const seconds = document.getElementById('second');
      
  starC.classList.toggle('flip');
  starC.style.display = "none"
  fundostart.style.display = "none"
      let duration =  parseInt(seconds.value);
    
      display = document.getElementById('timer');
      timer(duration, display);
    
    })
    
    const timer = (duration, display) => {
      let timer = duration;
      let minutes, seconds;
    
      let interval = setInterval(() => {
    
        seconds = Math.floor(timer % 61);
    
        // console.log(timer);
    
        seconds = seconds < 10 ? '0' + seconds : seconds;
    
        display.innerHTML = `${seconds}`;
    
        timer -= 1;
       
    
        if(timer < 0){

          starC.classList.toggle('flip');
          fundostart.style.display = "block";
          starC.style.display = "block";
    
          pontos = document.getElementById("ponto2");  
          cardf = 0;
        z+=1;
        if (z === 1){
        p1 = x;
        console.log(p1)
        x = 0;
        } else if(z === 2){
         p2 = x;
          console.log(p2)
        }else{console.log("erro")};
        if((z === 2)&&(timer < 0)){
          if(p1 > p2){
            alert("player1 ganhou");
            window.location.reload();
          }else if(p1 < p2){
            alert("player2 ganhou");
            window.location.reload();
          }else{
            alert("empate");
            window.location.reload();
          }
        };
        display.innerHTML = 60;
          (function resetgame() {
            cards.forEach(card => {
              let randomPos = Math.floor(Math.random() * 12);
              card.style.order = randomPos;
              card.classList.remove('flip');
              card.addEventListener("click", flipCard)
              resetBoard();
              cardf = 0
            });
          })();        
          clearInterval(interval);

    }
     }, 1000);  
}

