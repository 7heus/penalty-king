class Game {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-area");
    this.introScreen = document.getElementById("intro-screen");
    this.endScreen = document.getElementById("end-screen");
    this.timesClicked = 0;
    this.timeRunning = 10000;
    this.timeHovered = 0;
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
    const rect = orb.getBoundingClientRect();
    orb.addEventListener("mouseover", (e) => {
      this.timeHovered += 1;
      console.log(this.timeHovered);
    });
    console.log(this.timeHovered);
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
    const endScore = document.getElementById("end-score");
    const score = (this.timesClicked + this.timeHovered) * 100;
    endScore.innerHTML = `Times clicked: ${this.timesClicked} Times hovered: ${this.timeHovered} Total score: ${score}`;

    this.gameContainer.style.display = "none";
    this.endScreen.style.display = "block";
  }
}
