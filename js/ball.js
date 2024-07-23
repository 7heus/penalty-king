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
    const imgLeft = document.createElement("img");
    const imgRight = document.createElement("img");
    const imgCenter = document.createElement("img");
    const ballTop = parseInt(
      ball.style.top.slice(0, ball.style.top.length - 2)
    );
    const ballLeft = parseInt(
      ball.style.left.slice(0, ball.style.left.length - 2)
    );
    imgLeft.setAttribute("src", "./images/left.png");
    imgLeft.setAttribute("id", "left");
    imgLeft.setAttribute("class", "arrows");
    imgLeft.style.width = "150px";
    imgLeft.style.height = "150px";
    imgLeft.style.position = "absolute";
    imgLeft.style.opacity = "40%";
    imgLeft.style.top = `${ballTop - 50}px`;
    imgLeft.style.left = `${ballLeft - 70}px`;

    imgRight.setAttribute("src", "./images/right.png");
    imgRight.setAttribute("id", "right");
    imgRight.setAttribute("class", "arrows");
    imgRight.style.width = "150px";
    imgRight.style.height = "150px";
    imgRight.style.position = "absolute";
    imgRight.style.opacity = "40%";
    imgRight.style.top = `${ballTop - 50}px`;
    imgRight.style.left = `${ballLeft + 50}px`;

    imgCenter.setAttribute("src", "./images/front.png");
    imgCenter.setAttribute("id", "center");
    imgCenter.setAttribute("class", "arrows");
    imgCenter.style.width = "150px";
    imgCenter.style.height = "150px";
    imgCenter.style.position = "absolute";
    imgCenter.style.opacity = "100%";
    imgCenter.style.top = `${ballTop - 100}px`;
    imgCenter.style.left = `${ballLeft - 20}px`;

    this.gameScreen.appendChild(imgLeft);
    this.gameScreen.appendChild(imgRight);
    this.gameScreen.appendChild(imgCenter);

    this.gameScreen.appendChild(ball);
  }

  removeArrows() {
    const arrows = [...document.querySelectorAll(".arrows")];
    console.log(arrows);
    arrows.forEach((x) => {
      x.remove();
    });
  }

  createGif() {
    const ball = document.querySelector(".football");
    const ballTop = parseInt(
      ball.style.top.slice(0, ball.style.top.length - 2)
    );
    const ballLeft = parseInt(
      ball.style.left.slice(0, ball.style.left.length - 2)
    );
    const gif = document.createElement("img");
    gif.setAttribute("src", "./images/smaller-unscreen.gif");
    gif.setAttribute("id", "gif");
    gif.style.top = `${ballTop - 10}px`;
    gif.style.left = `${ballLeft - 250}px`;
    gif.style.scale = "300%";
    gif.style.position = "absolute";

    this.gameScreen.appendChild(gif);

    setTimeout(() => {
      gif.remove();
    }, 2000);
  }

  animate(pos) {
    const ball = document.querySelector(".football");
    let interval;
    let maxTimeMs = 2000;
    const distanceLeft = 465;
    const distanceRight = 865;
    const maxTop = 400;

    if (pos === "center") {
      interval = setInterval(() => {
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // prettier-ignore
        if (maxTimeMs === 0) clearInterval(interval);
        if(currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`; // prettier-ignore
      }, 10);
    } else if (pos === "left") {
      interval = setInterval(() => {
        if (maxTimeMs === 0) clearInterval(interval);
        maxTimeMs -= 50;
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // prettier-ignore
        const currentLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // prettier-ignore
        if (currentLeft !== distanceLeft) ball.style.left = `${currentLeft - 8}px`; // prettier-ignore
        if(currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`; // prettier-ignore
      }, 10);
    } else if (pos === "right") {
      interval = setInterval(() => {
        if (maxTimeMs === 0) clearInterval(interval);
        maxTimeMs -= 50;
        const currentLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // prettier-ignore
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // prettier-ignore
        if (currentLeft !== distanceRight) ball.style.left = `${currentLeft + 8}px`; // prettier-ignore
        if(currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`; // prettier-ignore
      }, 10);
    }
  }

  move(selectedDirection) {
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const center = document.getElementById("center");
    switch (selectedDirection) {
      case "center":
        center.style.opacity = "100%";
        left.style.opacity = "40%";
        right.style.opacity = "40%";
        break;
      case "left":
        center.style.opacity = "40%";
        left.style.opacity = "100%";
        right.style.opacity = "40%";
        break;
      case "right":
        center.style.opacity = "40%";
        left.style.opacity = "40%";
        right.style.opacity = "100%";
        break;
    }
  }
}
