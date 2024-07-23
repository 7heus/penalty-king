class Orb {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 60;
    this.height = 60;
  }

  static timesClicked = 0;
  create() {
    const orb = document.createElement("div");
    const timer = document.createElement("div");
    orb.setAttribute("id", "orb");
    orb.style.height = `${this.height}px`;
    orb.style.width = `${this.width}px`;
    orb.style.position = "absolute";
    timer.setAttribute("id", "timer");
    orb.appendChild(timer);

    this.gameScreen.appendChild(orb);
  }

  move() {
    const orb = document.getElementById("orb");
    const gameRect = this.gameScreen.getBoundingClientRect();
    const orbX = Math.random() * (gameRect.width - 60);
    const orbY = Math.random() * (gameRect.height - 60);

    orb.style.left = `${orbX}px`;
    orb.style.top = `${orbY}px`;
  }
}
