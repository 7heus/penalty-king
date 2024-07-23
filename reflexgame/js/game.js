class Game {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-area");
    this.introScreen = document.getElementById("intro-screen");
    this.endScreen = document.getElementById("end-screen");
    this.timesClicked = 0;
    this.timeRunning = 60000;
    this.timer;

    this.interval;

    this.orb = new Orb(this.gameScreen);
  }

  startGame() {
    const orb = this.orb.create();
    this.orb.move();
    orb.addEventListener("click", () => {
      this.timesClicked++;
      console.log(this.timesClicked);
    });
    this.interval = setInterval(() => {
      this.orb.move();
    }, 1000);
    this.introScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.timer = setInterval(() => {
      this.timeRunning -= 1000;
      if (this.timeRunning == 0) this.endGame();
    }, 1000);
  }

  endGame() {
    clearInterval(timer);

    this.gameContainer.style.display = "none";
    this.endScreen.style.display = "block";
  }
}
