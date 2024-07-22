class Ambience {
  constructor(gameScreen, audioSrc) {
    this.audioSrc = audioSrc;
    this.gameScreen = gameScreen;
  }

  create() {
    const audio = document.createElement("audio");

    this.gameScreen.appendChild(audio);
  }
  play() {}
  stop() {}
}
