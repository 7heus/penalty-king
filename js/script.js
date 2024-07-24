window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const gameIntro = document.getElementById("game-intro");
  const gameScreen = document.getElementById("game-screen");
  const gameEnd = document.getElementById("game-end");
  const restartBtn = document.getElementById("restart-button");
  const game = new Game();

  startBtn.addEventListener("click", () => {
    game.start();
  });

  restartBtn.addEventListener("click", () => {
    location.reload();
  });

  function keydownHandler(event) {
    const key = event.key;
    const possibleKeys = ["ArrowUp", "ArrowLeft", "ArrowRight", " "];
    if (possibleKeys.includes(key)) {
      if (game.isShooting) return;
      switch (key) {
        case " ":
          game.shoot();
          break;
        case "ArrowUp":
          game.selectedDirection = "center";
          game.changeDirection();
          break;
        case "ArrowLeft":
          game.selectedDirection = "left";
          game.changeDirection();
          break;
        case "ArrowRight":
          game.selectedDirection = "right";
          game.changeDirection();
          console.log(key);
          break;
      }
    }
  }

  window.addEventListener("keydown", keydownHandler);
};
