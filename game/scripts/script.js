var cards = document.querySelectorAll('.M-card');
var cardf = 0
var pontos = document.getElementById("ponto1");

let ponto1 = document.getElementById("ponto1");
let ponto2 = document.getElementById("ponto2");

const virando  = document.getElementById("cv")
const virandoc  = document.getElementById("cvd")

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

x= 0


function flipCard() { 
  virando.play();
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');
 

  if (!hasFlippedCard) {// primeiro click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this; //segundo click

  if(firstCard == this){//som do primeiro click
  virando.play()
 }else if(secondCard == this){//som do segundo click
  virandoc.play()
 }
  checkForMatch();
  if(cardf === 6){//reset do game
    (function resetgame() {
      cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
        card.classList.remove('flip');
        card.addEventListener("click", flipCard)
        resetBoard();
        cardf = 0
        virandoc.play()
      });
    })();
  
  }
  
}
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards() ;
  isMatch? x++ : unflipCards();
  isMatch? pontos.innerHTML= `${x}`:unflipCards();
 isMatch? cardf ++ :unflipCards();
 isMatch? virando.play(): unflipCards
 isMatch? virandoc.play(): unflipCards
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    virando.play();
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {//jogar as cartas aleatoriamente na mesa
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();



cards.forEach(card => card.addEventListener('click', flipCard));
