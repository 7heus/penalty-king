class Ball {
  constructor(gameScreen, imgSrc) {
    this.imgSrc = imgSrc;

    this.direction;
    this.gameScreen = gameScreen;

    this.width = 120;
    this.height = 120;
  }

  create() {
    const ball = document.createElement("img");
    ball.setAttribute("src", this.imgSrc);
    ball.style.width = `${this.width}px`;
    ball.style.height = `${this.height}px`;
    ball.setAttribute("class", "football");
    ball.style.scale = "100%";
    ball.style.position = "absolute";
    ball.style.top = "650px";
    ball.style.left = "665px";

    this.gameScreen.appendChild(ball);
  }

  removeBall(ball) {
    ball.remove();
  }

  move(selectedDirection) {
    const ball = document.querySelector(".football");
    let scaling = parseInt(ball.style.scale.slice(0, ball.style.scale.length - 1)); // prettier-ignore
    switch (selectedDirection) {
      case "center":
        ball.style.left = "665px";
        break;
      case "left":
        ball.style.left = "465px";
        break;
      case "right":
        ball.style.left = "865px";
        break;
    }
  }
}
