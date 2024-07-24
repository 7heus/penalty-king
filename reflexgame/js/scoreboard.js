class Scoreboard {
  constructor() {
    this.board = document.getElementById("scoreboard");
    this.clicks = document.getElementById("clicks");
    this.hover = document.getElementById("hover");
    this.score = document.getElementById("score");
    this.timer = document.getElementById("time-running");
  }

  update(clicks, hover, score) {
    this.clicks.innerHTML = `Clicks: ${clicks}`;
    this.hover.innerHTML = `Hover: ${hover}`;
    this.score.innerHTML = `Score: ${score}`;
  }
  updateTimer(minutes, seconds) {
    this.timer.innerHTML = `${minutes}:${seconds}`;
  }
}
