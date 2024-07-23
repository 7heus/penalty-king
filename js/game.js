class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.penaltiesScoreboard = document.querySelector("#penalties-scoreboard");
    this.attemptsCounter = document.querySelector("#attempts-counter");
    this.scoreCounter = document.querySelector("#score-counter");
    this.gameIntro = document.getElementById("game-intro");
    this.gameEnd = document.getElementById("game-end");
    this.gameContainer = document.getElementById("game-container");

    this.goalKeeper = new GoalKeeper(
      this.gameScreen,
      "./images/goalkeeper-idle.png"
    );

    this.height = 800;
    this.width = 1440;
    this.selectedDirection = "center";
    this.totalAttempts = 5;
    this.attempts = this.totalAttempts;
    this.isShooting = false;
    this.scoreboard = new Scoreboard();
    this.lastShot = "center";
    this.sameShots = 0;
    this.certainGuard = false;

    this.ball = new Ball(this.gameScreen, "./images/ball.webp");
  }

  start() {
    this.scoreboard.init(this.score, this.attempts);
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;

    this.gameIntro.style.display = "none";
    this.gameScreen.style.display = "block";

    this.goalKeeper.create();
    this.ball.create();
  }

  endGame() {
    this.gameScreen.style.display = "none";
    this.gameEnd.style.display = "block";
    const endCounter = document.getElementById("end-counter");
    const endMsg = document.getElementById("endMessage");
    const scored = [...document.querySelectorAll(".green-circle")].length;
    const missed = [...document.querySelectorAll(".red-circle")].length;
    if (scored > missed) endMsg.innerHTML = "You Won!";
    else endMsg.innerHTML = "You Lost!";
    endCounter.innerHTML = `Scored ${scored} out of ${this.totalAttempts} attempts.`;
  }

  #checkScore() {
    this.attempts--;
    const goalKeeper = document.querySelector(".goalkeeper");
    const leftArrow = document.getElementById("left");
    const rightArrow = document.getElementById("right");
    const centerArrow = document.getElementById("center");
    const ball = document.querySelector(".football");
    if (goalKeeper.style.left == "465px" && leftArrow.style.opacity == "1") {
      setTimeout(() => {
        this.missMessage();
        this.scoreboard.setAttempts(false);
      }, 500);
      console.log(this.attempts);
    } else if (
      goalKeeper.style.left == "665px" &&
      centerArrow.style.opacity == "1"
    ) {
      setTimeout(() => {
        this.missMessage();
        this.scoreboard.setAttempts(false);
      }, 500);
      console.log(this.attempts);
    } else if (
      goalKeeper.style.left == "865px" &&
      rightArrow.style.opacity == "1"
    ) {
      setTimeout(() => {
        this.missMessage();
        this.scoreboard.setAttempts(false);
      }, 500);
      console.log(this.attempts);
    } else {
      setTimeout(() => {
        this.scoreboard.setAttempts(true);
        this.goalMessage();
      }, 500);
      console.log("score");
    }
    setTimeout(() => {
      ball.remove();
      this.ball.removeArrows();
    }, 2000);
    if (this.attempts == 0) {
      setTimeout(() => {
        this.endGame();
      }, 2000);
      return;
    }
  }

  changeDirection() {
    if (this.isShooting) return;
    this.ball.move(this.selectedDirection);
  }

  shoot() {
    if (this.isShooting) return;
    if (this.lastShot == this.selectedDirection) this.sameShots++;
    this.ball.createGif();
    this.isShooting = true;
    console.log(this.sameShots);
    setTimeout(() => {
      if (this.certainGuard == true) {
        console.log("certainGuard");
        this.goalKeeper.move(this.selectedDirection);
        this.ball.animate(this.selectedDirection);
        this.isShooting = true;
        this.#checkScore();
        setTimeout(() => {
          this.ball.create();
          this.isShooting = false;
        }, 2000);
        this.selectedDirection = "center";
        return;
      }
      this.checkIfSpamShot();
      this.lastShot = this.selectedDirection;
      this.isShooting = true;
      this.goalKeeper.guard();

      this.ball.animate(this.selectedDirection);
      console.log(this.ball);

      this.#checkScore();
      setTimeout(() => {
        this.ball.create();
        this.isShooting = false;
      }, 2000);
      this.selectedDirection = "center";
    }, 1800);
  }

  checkIfSpamShot() {
    if (this.certainGuard === true) return;
    if (this.sameShots >= 2) this.certainGuard = true;
    else this.certainGuard = false;
  }

  goalMessage() {
    const element = document.getElementById("celebration");
    this.gameScreen.appendChild(element);
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 1500);
  }

  missMessage() {
    const element = document.getElementById("missed");
    this.gameScreen.appendChild(element);
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 1500);
  }
}
