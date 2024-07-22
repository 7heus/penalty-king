class Game {
  constructor() {
    this.gameScreen = document.getElementById("game-screen");
    this.penaltiesScoreboard = document.querySelector("#penalties-scoreboard");
    this.attemptsCounter = document.querySelector("#attempts-counter");
    this.scoreCounter = document.querySelector("#score-counter");
    this.gameIntro = document.getElementById("game-intro");

    this.goalKeeper = new GoalKeeper(
      this.gameScreen,
      "./images/goalkeeper-idle.png"
    );

    this.height = 800;
    this.width = 1440;
    this.selectedDirection = "center";
    this.attempts = 3;
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

  #checkScore() {
    const goalKeeper = document.querySelector(".goalkeeper");
    const ball = document.querySelector(".football");
    if (goalKeeper.style.left == ball.style.left) {
      attempts--;
      this.ball.removeBall();
    } else {
      score++;
      this.ball.removeBall();
    }
  }

  changeDirection() {
    this.ball.move(this.selectedDirection);
  }

  shoot(selectedDirection) {
    this.goalKeeper.move();
  }
}
