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

  animate(pos) {
    const ball = document.querySelector(".football");
    let interval;
    let maxTimeMs = 1000;
    let deg = 0;
    const maxTop = 650;

    if (pos === "center") {
      interval = setInterval(() => {
        if (maxTimeMs === 0) clearInterval(interval);
        maxTimeMs -= 50;
        const currentTop = parseInt(
          ball.style.top.slice(0, ball.style.top.length - 2)
        );
        if (currentTop !== maxTop) {
          ball.style.top = `${currentTop + 1}px`;
        }
      }, 50);
    }
  }

  move(selectedDirection) {
    const ball = document.querySelector(".football");
    switch (selectedDirection) {
      case "center":
        ball.style.left = "665px";
        this.animate("center");
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
