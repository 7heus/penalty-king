const startBtn = document.getElementById("start-button");
const game = new Game();

startBtn.addEventListener("click", () => {
  game.startGame();
});
