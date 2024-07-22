class Scoreboard {
  constructor() {
    this.attemptsId = document.getElementById("attempts-counter");
    this.scoresId = document.getElementById("score-counter");
  }

  init(score, attempts) {
    this.scoresId.innerHTML = `SCORE: ${score * 100}`;
    this.attemptsId.innerHTML = `ATTEMPTS: ${attempts}`;
  }

  setScore(score) {
    this.scoresId.innerHTML = `SCORE: ${score * 100}`;
  }

  setAttempts(attempts) {
    this.attemptsId.innerHTML = `ATTEMPTS: ${attempts}`;
  }
}
