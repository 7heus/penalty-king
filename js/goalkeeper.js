class GoalKeeper {
  constructor(gameScreen, imgSrc) {
    this.gameScreen = gameScreen;
    this.imgSrc = imgSrc;

    this.width = 120;
    this.height = 220;
  }

  create() {
    const goalKeeper = document.createElement("img");
    goalKeeper.setAttribute("src", this.imgSrc);
    goalKeeper.setAttribute("class", "goalkeeper");
    goalKeeper.style.height = `${this.height}px`;
    goalKeeper.style.width = `${this.width}px`;
    goalKeeper.style.position = "absolute";
    goalKeeper.style.scale = "100%";
    goalKeeper.style.top = "300px";
    goalKeeper.style.left = "665px";

    this.gameScreen.appendChild(goalKeeper);
  }

  move() {
    const goalKeeper = document.querySelector(".goalkeeper");
    const possibleMoves = ["center", "left", "right"];

    const rand = Math.floor(Math.random() * possibleMoves.length);
    let selectedMove = possibleMoves[rand];
    switch (selectedMove) {
      case "left":
        goalKeeper.style.left = "465px";
        goalKeeper.setAttribute("src", "./images/guardLeft.webp");
        break;
      case "right":
        goalKeeper.style.left = "865px";
        goalKeeper.setAttribute("src", "./images/guardRight.webp");
        break;
      case "center":
        goalKeeper.style.left = "665px";
        goalKeeper.setAttribute("src", "./images/goalkeeper-idle.png");
        break;
    }

    setTimeout(() => {
      goalKeeper.style.left = "665px";
      goalKeeper.setAttribute("src", "./images/goalkeeper-idle.png");
    }, 2000);
  }
}
