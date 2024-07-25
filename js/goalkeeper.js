// Goalkeeper class to handle goalkeeper creation and movement

class GoalKeeper {
  /* Constructor initialize where the goalkeeper will be displayed, in this case in the gameScreen element, and 
  imgSrc represents the path to the image file that will be used as visual representation of the ball*/
  constructor(gameScreen, imgSrc) {
    this.gameScreen = gameScreen; // Reference to the gameScreen element
    this.imgSrc = imgSrc; // Reference to the image source of the ball (?????????????????????????????????????????????????????????????????)

    this.width = 120; // Width of the goalkeeper in pixels
    this.height = 220; // Height of the goalkeeper in pixels
  }



 // Method to create and display the goalkeeper on gameScreen

  create() {
  const goalKeeper = document.createElement("img"); // Create a new img element 
  goalKeeper.setAttribute("src", this.imgSrc); // Set the image source of the goalkeeper (?????????????????????????????????????????????????????????????????)
  goalKeeper.setAttribute("class", "goalkeeper"); // The HTML element goalkeeper get the class goalkeeper
  goalKeeper.style.height = `${this.height}px`; // Set the height of the goalkeeper
  goalKeeper.style.width = `${this.width}px`; // Set the widht of the goalkeeper
  goalKeeper.style.position = "absolute"; // Absolute means the goalkeeper will be placed exactly where it was specified, using the below top and left values.
  // It will not move around within the gameScreen, its just will be fixed were it was specified.
  goalKeeper.style.scale = "100%"; // 100% means that the goalkeeper will be displayed at its original size without any scalling applied
  goalKeeper.style.top = "300px"; // Set the vertical position of the goalkeeper element on gameScreen according to distance in pixels from the top edge.
  // Tells the browser to place the top edge of the goalkeeper 300 pixels down from the top edge of the gameScreen
  goalKeeper.style.left = "665px"; // Set the horizontal position of the goalkeeper element on gameScreen according to distance in pixel from the left edge.
  // Tells the browser to place the left edge of the goalkeeper 665 pixels right to the left edge of the gameScreen

  this.gameScreen.appendChild(goalKeeper); // Add the goalkeeper to the gameScreen. The goalkeeper is added as a child of gameScreen element
  // The ball is now a part of the gameScreen, becoming visible in the browser.
}

  
  
  guard() {
    const possibleMoves = ["center", "left", "right"];

    const rand = Math.floor(Math.random() * possibleMoves.length);
    let selectedMove = possibleMoves[rand];

    this.move(selectedMove);
  }



  move(selectedMove) { // ?????????????????????????????????????????????????????????????????????????????????????????????????????????
    const goalKeeper = document.querySelector(".goalkeeper"); // Finds the first element on the browser with class name "goalkeeper"
    
    switch (selectedMove) { // Move the goalkeeper with base on the random position picked from "possibleMoves" array
      case "left":
        goalKeeper.style.left = "465px"; // Set the horizontal position of the goalkeeper element on gameScreen according to distance in pixel from the left edge.
        // Tells the browser to place the left edge of the goalkeeper 465 pixels right to the left edge of the gameScreen 
        goalKeeper.setAttribute("src", "./images/guardLeft.webp"); // Switch the gooalkeeper image to the "guardLeft.webp" image
        break;
      case "right":
        goalKeeper.style.left = "865px"; // Set the horizontal position of the goalkeeper element on gameScreen according to distance in pixel from the left edge.
        // Tells the browser to place the left edge of the goalkeeper 865 pixels right to the left edge of the gameScreen 
        goalKeeper.setAttribute("src", "./images/guardRight.webp"); // Switch the gooalkeeper image to the "guardRight.webp" image
        break;
      case "center":
        goalKeeper.style.left = "665px"; // Set the horizontal position of the goalkeeper element on gameScreen according to distance in pixel from the left edge.
        // Tells the browser to place the left edge of the goalkeeper 665 pixels right to the left edge of the gameScreen
        goalKeeper.setAttribute("src", "./images/goalkeeper-idle.png"); // Switch the gooalkeeper image to the "goalkeeper-idle.png" image
        break;
    }
    
    
    
    // Move the goalkeeper back to the center 
    /* After the goalkeeper has moved to a new position and changed its image, the setTimeout ensures that after 2 seconds, 
    the goalkeeper will return to the center and switch back to the idle image.*/

    setTimeout(() => {
      goalKeeper.style.left = "665px"; // Set the horizontal position of the goalkeeper element on gameScreen according to distance in pixel from the left edge.
      // Tells the browser to place the left edge of the goalkeeper 665 pixels right to the left edge of the gameScreen
      goalKeeper.setAttribute("src", "./images/goalkeeper-idle.png"); // Switch the gooalkeeper image to the "goalkeeper-idle.png" image
    }, 2000); // 2000 miliseconds (2 seconds) of delay, after that, the function inside is executed, making the goalkeeper back to the center.
  }
}