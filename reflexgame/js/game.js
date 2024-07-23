class Game {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-area");
    this.introScreen = document.getElementById("intro-screen");
    this.endScreen = document.getElementById("end-screen");

    this.interval;

    this.orb = new Orb(this.gameScreen);
  }

  startGame() {
    this.introScreen.style.display = "none";
    this.gameContainer.style.display = "flex";

    this.orb.create();
  }
}
