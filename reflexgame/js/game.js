class Game {
  constructor() {
    this.gameContainer = document.getElementById("game-container");
    this.gameScreen = document.getElementById("game-area");
    this.introScreen = document.getElementById("intro-screen");
    this.endScreen = document.getElementById("end-screen");
    this.timesClicked = 0;
    this.timeRemaining = 30;
    this.timeHovered = 0;
    this.timer;
    this.scoreboard = new Scoreboard();
    this.interval;

    this.orb = new Orb(this.gameScreen);
  }

  startGame() {
    const orb = this.orb.create();
    this.orb.move();
    orb.style.visibility = "hidden";
    setTimeout(() => {
      orb.style.visibility = "visible";
    }, 1000);
    orb.addEventListener("click", () => {
      this.timesClicked++;
      const score = (this.timesClicked + this.timeHovered) * 100;
      this.scoreboard.update(this.timesClicked, this.timeHovered, score);
    });
    orb.addEventListener("mouseover", (e) => {
      this.timeHovered++;
      const score = (this.timesClicked + this.timeHovered) * 100;
      this.scoreboard.update(this.timesClicked, this.timeHovered, score);
    });
    console.log(this.timeHovered);
    this.interval = setInterval(() => {
      const minutes = Math.floor(this.timeRemaining / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (this.timeRemaining % 60).toString().padStart(2, "0");
      this.scoreboard.updateTimer(minutes, seconds);
      this.orb.move();
    }, 1000);
    this.introScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.timer = setInterval(() => {
      if (this.timeRemaining == 0) this.endGame();
      this.timeRemaining--;
    }, 1000);
  }

  endGame() {
    clearInterval(timer);
    const endScore = document.getElementById("end-score");
    const score = (this.timesClicked + this.timeHovered) * 100;
    endScore.innerHTML = `Times clicked: ${this.timesClicked} Times hovered: ${this.timeHovered} Total score: ${score}`;

    this.gameContainer.style.display = "none";
    this.endScreen.style.display = "block";
    this.orb.remove();
  }
}
