// Scoreboard class to handle the display score and attempts


class Scoreboard {
  constructor() {
    this.scoresId = document.getElementById("score-counter"); // Reference to element "score-counter"
    this.scoreboardId = document.getElementById("scoreboard"); // Reference to element "scoreboard"
  }

  init(score, attempts) {
    for (let i = 0; i < attempts; i++) {
      const scoreCircle = document.createElement("div");
      scoreCircle.setAttribute("class", "score-circle");

      this.scoreboardId.appendChild(scoreCircle);
    }
  }

  setAttempts(bool) {
    const circle = document.querySelector(".score-circle");
    if (!bool) {
      circle.classList.remove("score-circle");
      circle.classList.add("red-circle");
    } else {
      circle.classList.remove("score-circle");
      circle.classList.add("green-circle");
    }
  }
}
