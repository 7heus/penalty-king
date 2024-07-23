class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.penaltiesScoreboard = document.querySelector("#penalties-scoreboard");
    this.attemptsCounter = document.querySelector("#attempts-counter");
    this.scoreCounter = document.querySelector("#score-counter");
    this.gameIntro = document.getElementById("game-intro");
    this.gameEnd = document.getElementById("game-end");

    this.goalKeeper = new GoalKeeper(
      this.gameScreen,
      "./images/goalkeeper-idle.png"
    );

    this.height = 800;
    this.width = 1440;
    this.selectedDirection = "center";
    this.attempts = 5;
    this.score = 0;
    this.isShooting = false;
    this.scoreboard = new Scoreboard();

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
  }

  #checkScore() {
    const goalKeeper = document.querySelector(".goalkeeper");
    const leftArrow = document.getElementById("left");
    const rightArrow = document.getElementById("right");
    const centerArrow = document.getElementById("center");
    const ball = document.querySelector(".football");
    if (goalKeeper.style.left == "465px" && leftArrow.style.opacity == "1") {
      this.attempts--;
      setTimeout(() => {
        this.missMessage();
      }, 500);
      setTimeout(() => {
        ball.remove();
        this.ball.removeArrows();
      }, 2000);
      this.scoreboard.setAttempts(this.attempts);
      if (this.attempts == 0) {
        setTimeout(() => {
          this.endGame();
        }, 2000);
        return;
      }
      console.log(this.attempts);
    } else if (
      goalKeeper.style.left == "665px" &&
      centerArrow.style.opacity == "1"
    ) {
      this.attempts--;
      setTimeout(() => {
        this.missMessage();
      }, 500);
      setTimeout(() => {
        ball.remove();
        this.ball.removeArrows();
      }, 2000);
      this.scoreboard.setAttempts(this.attempts);
      if (this.attempts == 0) {
        setTimeout(() => {
          this.endGame();
        }, 2000);
        return;
      }
      console.log(this.attempts);
    } else if (
      goalKeeper.style.left == "865px" &&
      rightArrow.style.opacity == "1"
    ) {
      this.attempts--;
      setTimeout(() => {
        this.missMessage();
      }, 500);
      setTimeout(() => {
        ball.remove();
        this.ball.removeArrows();
      }, 2000);
      this.scoreboard.setAttempts(this.attempts);
      if (this.attempts == 0) {
        setTimeout(() => {
          this.endGame();
        }, 2000);
        return;
      }
      console.log(this.attempts);
    } else {
      this.score++;
      this.scoreboard.setScore(this.score);
      setTimeout(() => {
        ball.remove();
        this.ball.removeArrows();
      }, 2000);
      setTimeout(() => {
        this.goalMessage();
      }, 500);
      console.log("score");
    }
  }

  changeDirection() {
    this.ball.move(this.selectedDirection);
  }

  shoot() {
    if (this.isShooting) return;
    this.isShooting = true;
    this.goalKeeper.move();

    this.ball.animate(this.selectedDirection);
    console.log(this.ball);

    this.#checkScore();
    setTimeout(() => {
      this.ball.create();
      this.isShooting = false;
    }, 2000);
    this.selectedDirection = "center";
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
