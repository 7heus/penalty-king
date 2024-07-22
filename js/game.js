class Game {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    this.penaltiesScoreboard = document.querySelector("#penalties-scoreboard");
    this.attemptsCounter = document.querySelector("#attempts-counter");
    this.scoreCounter = document.querySelector("#score-counter");

    this.height = 800;
    this.width = 700;

    this.ball = new Ball(gameScreen, "./images/ball.png");

    this.refresh;
    this.refreshRate = Math.floor(1000 / 30); //30 fps
  }

  shoot(direction) {
    this.ball.move(direction);
  }
}
