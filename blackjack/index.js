const player = {
    name: "Mohammad",
    chips: 200,
  };
  let cards = [];
  let sum = 0;
  let message = "";
  let blackJack = false;
  let isAlive = false;
  const messageEl = document.getElementById("message");
  const sumEl = document.getElementById("sum");
  const cardsEl = document.getElementById("cards");
  const playerEl = document.getElementById("player");
  
  playerEl.textContent = `${player.name}: $${player.chips}`;
  
  function startGame() {
    if (isAlive) {
      message = "The game has already started";
    } else {
      cardsEl.textContent = "Cards: ";
      cards = [randomCard(), randomCard()];
      sum = cards[0] + cards[1];
      blackJack = false;
      for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
      }
      sumEl.textContent = `Sum: ${sum}`;
      renderGame();
    }
  }
  
  function renderGame() {
    isAlive = true;
    if(player.chips<10){
        message = "get more chips so you can play!"
        messageEl.textContent = message;
        return
    }
    else if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You got BlackJack!!";
      player.chips += 200;
      playerEl.textContent = `${player.name}: $${player.chips}`;
      blackJack = true;
      isAlive = false;
    } else {
      isAlive = false;
      message = "You are out of the game!";
      player.chips -= 10;
      playerEl.textContent = `${player.name}: $${player.chips}`;
    }
    messageEl.textContent = message;
    sumEl.textContent = `Sum: ${sum}`;
  }
  
  function newCard() {
    if (isAlive && !blackJack&&player.chips>10) {
      const card = randomCard();
      sum += card;
      cards.push(card);
      cardsEl.textContent += card + " ";
      renderGame();
    } else {
      message = "You can't draw another card";
      messageEl.textContent = message;
    }
  }
  
  function randomCard() {
    const randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
      return 11;
    } else if (randomNum > 10) {
      return 10;
    } else {
      return randomNum;
    }
  }