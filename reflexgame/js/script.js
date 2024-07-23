window.onload = function () {
  const startBtn = document.getElementById("start-button");
  const restartBtn = document.getElementById("restart-button");
  const game = new Game();

  startBtn.addEventListener("click", () => {
    game.startGame();
  });

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
};
