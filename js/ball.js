class Ball {
  constructor(gameScreen, imgSrc) {
    this.imgSrc = imgSrc;

    this.direction;
    this.gameScreen = gameScreen;

    this.width = 50;
    this.height = 50;
  }

  createBall() {
    const ball = document.createElement("img");
    ball.setAttribute("src", this.imgSrc);
    ball.style.width = `${this.width}px`;
    ball.style.height = `${this.height}px`;
    ball.setAttribute("class", "football");
    ball.style.scale = "100%";

    this.gameScreen.appendChild(ball);
  }

  removeBall(ball) {
    ball.remove();
  }

  move(direction) {
    const ball = document.querySelector(".football");
    const left = ball.style.left;
    const top = ball.style.top;
    let scaling = parseInt(ball.style.scale.slice(0, ball.style.scale.length - 1)); // prettier-ignore
    switch (direction) {
      case "ArrowLeft":
    }
  }
}
