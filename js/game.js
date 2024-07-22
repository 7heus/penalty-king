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

    this.ball = new Ball(this.gameScreen, "./images/ball.webp");

    this.refresh;
    this.refreshRate = Math.floor(1000 / 30); //30 fps
  }

  shoot(direction) {
    this.ball.move(direction);
  }

  start() {
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
    if (this.attempts == 0) {
      this.endGame();
      return;
    }
    const goalKeeper = document.querySelector(".goalkeeper");
    const ball = document.querySelector(".football");
    if (goalKeeper.style.left == ball.style.left) {
      this.attempts--;
      console.log(this.attempts);
      ball.remove();
    } else {
      this.score++;
      ball.remove();
      this.goalMessage();
      console.log("score");
    }
  }

  changeDirection() {
    this.ball.move(this.selectedDirection);
  }

  shoot(selectedDirection) {
    this.goalKeeper.move();

    this.#checkScore();
    this.ball.create();
  }

  goalMessage() {
    const element = document.getElementById("celebration");
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 2000);
  }
}
