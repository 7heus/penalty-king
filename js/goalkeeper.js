class GoalKeeper {
  constructor(gameScreen, imgSrc) {
    this.gameScreen = gameScreen;
    this.imgSrc = imgSrc;

    this.width = 100;
    this.height = 120;
  }

  create() {
    const goalKeeper = document.createElement("img");
    goalKeeper.setAttribute("src", this.imgSrc);
    goalKeeper.setAttribute("class", "goalkeeper");
    goalKeeper.style.height = this.height;
    goalKeeper.style.width = this.width;
    goalKeeper.style.position = "absolute";
    goalKeeper.style.top = "100px";
    goalKeeper.style.left = "370px";

    this.gameScreen.appendChild(goalKeeper);
  }
}
