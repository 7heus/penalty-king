// Ball class to handle ball creation, removal and movement

class Ball {
  /* Constructor initialize where the ball will be displayed, in this case in gameScreen element, and
  imgSrc represents the path to the image file that will be used as visual representation of the ball*/
  constructor(gameScreen, imgSrc) {
    this.imgSrc = imgSrc; // Reference to the image source of the ball (?????????????????????????????????????????????????????????????????)

    this.direction; // ???????????????????????????????????????????????????????????????????
    this.gameScreen = gameScreen; // Reference to the gameScreen element

    this.width = 120; // Width of the ball in pixels
    this.height = 120; // Height of the ball in pixels
  }



 // Method to create and display the ball and red arrows on gameScreen

  create() {

  // Ball

  const ball = document.createElement("img"); // Create a new img element for the ball
  ball.setAttribute("src", this.imgSrc); // Set the image source of the ball (?????????????????????????????????????????????????????????????????)
  ball.style.width = `${this.width}px`; // Set the widht of the ball
  ball.style.height = `${this.height}px`; // Set the height of the ball
  ball.setAttribute("class", "football"); // The HTML element ball belongs now to the class "football"
  // Setting the class with a value name allows for applying styles, or different uses, because allows the identication of the element in the code
  ball.style.scale = "100%"; // 100% means that the ball will be displayed at its original size without any scalling applied
  ball.style.position = "absolute"; // Absolute means the ball will be placed exactly where it was specified, using the below top and left values.
  // It will not move around within the gameScreen, its just will be fixed were it was specified.
  ball.style.top = "650px"; // Set the vertical position of the ball element on gameScreen according to distance in pixels from the top edge.
  // tells the browser to place the top edge of the ball 650 pixels down from the top edge of the gameScreen 
  ball.style.left = "665px"; // Set the horizontal position of the ball element on gameScreen according to distance in pixel from the left edge.
  // tells the browser to place the left edge of the ball 665 pixels right to the left edge of the gameScreen
  
  this.gameScreen.appendChild(ball); // Add the ball to the gameScreen. The ball is added as a child of gameScreen element
  // The ball is now a part of the gameScreen, becoming visible in the browser
    
    
    // Red arrows
    
    const imgLeft = document.createElement("img"); // create a new img element for the left red arrow
    const imgRight = document.createElement("img"); // create a new img element for the right red arrow
    const imgCenter = document.createElement("img"); // create a new img element for the front red arrow
    const ballTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)); // Get the top position of the ball as an integer 
    // Converting string to an integer to allows perfoming numerical calculations and position based on the ball position
    const ballLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // Get the left position of the ball as an integer
    // Converting string to an integer to allows perfoming numerical calculations and position based on the ball position    
    imgLeft.setAttribute("src", "./images/left.png"); // set the image source of the left red arrow
    imgLeft.setAttribute("id", "left"); // Set the Id of left red arrow to "left"
    imgLeft.setAttribute("class", "arrows"); // The HTML element belongs now to the class "arrows"
    imgLeft.style.width = "150px"; // Set the with of the left red arrow
    imgLeft.style.height = "150px"; // Set the height of the left red arrow
    imgLeft.style.position = "absolute"; // Absolute means the left red arrow will be placed exactly where it was specified, using the below top and left values.
    // It will not move around within the gameScreen, its just will be fixed were it was specified.
    imgLeft.style.opacity = "40%"; // Set the opacity of left arrow to be 40%
    imgLeft.style.top = `${ballTop - 50}px`; // Set the position of left arrow above the ball
    imgLeft.style.left = `${ballLeft - 70}px`; // Set the position of the left arrow to the left of the ball

    imgRight.setAttribute("src", "./images/right.png"); // set the image source of the right red arrow
    imgRight.setAttribute("id", "right"); // Set the Id of right red arrow to "left"
    imgRight.setAttribute("class", "arrows"); // The HTML element belongs now to the class "arrows"
    imgRight.style.width = "150px"; // Set the with of the right red arrow
    imgRight.style.height = "150px"; // Set the height of the right red arrow
    imgRight.style.position = "absolute"; // Absolute means the right red arrow will be placed exactly where it was specified, using the below top and left values.
    // It will not move around within the gameScreen, its just will be fixed were it was specified.
    imgRight.style.opacity = "40%"; // Set the opacity of right arrow to be 40%
    imgRight.style.top = `${ballTop - 50}px`; // Set the position of right arrow above the ball
    imgRight.style.left = `${ballLeft + 50}px`; // Set the position of the right arrow to the right of the ball

    imgCenter.setAttribute("src", "./images/front.png"); // set the image source of the front red arrow
    imgCenter.setAttribute("id", "center"); // Set the Id of front red arrow to "left"
    imgCenter.setAttribute("class", "arrows"); // The HTML element belongs now to the class "arrows"
    imgCenter.style.width = "150px"; // Set the with of the front red arrow
    imgCenter.style.height = "150px"; // Set the height of the front red arrow
    imgCenter.style.position = "absolute"; // Absolute means the front red arrow will be placed exactly where it was specified, using the below top and left values.
    // It will not move around within the gameScreen, its just will be fixed were it was specified.
    imgCenter.style.opacity = "100%"; // Set the opacity of center arrow to be 100%
    imgCenter.style.top = `${ballTop - 100}px`; // Set the position of center arrow above the ball
    imgCenter.style.left = `${ballLeft - 20}px`; // // Set the position of the front arrow to the center of the ball

    this.gameScreen.appendChild(imgLeft); // Add the red left arrow to the gameScreen. The red left arrow is added as a child of gameScreen element
    // The red left arrow is now a part of the gameScreen, becoming visible in the browser
    this.gameScreen.appendChild(imgRight); // Add the red right arrow to the gameScreen. The red right arrow is added as a child of gameScreen element
    // The red right arrow is now a part of the gameScreen, becoming visible in the browser
    this.gameScreen.appendChild(imgCenter); // Add the red front arrow to the gameScreen. The red front arrow is added as a child of gameScreen element
    // The red front arrow is now a part of the gameScreen, becoming visible in the browser
  }



  // Remove arrows from the gameScreen

  removeArrows() {
    const arrows = [...document.querySelectorAll(".arrows")]; // Select all the elements with class "arrows"
    console.log(arrows); // Test red arrows in console ?????????????????????????????????????
    arrows.forEach((x) => { // Remove each red arrow from the gameScreen
      x.remove();
    });
  }



  // Creating gif animation and positioning it in gameScreen

  createGif() {
    const ball = document.querySelector(".football"); // Select the gif element
    const ballTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)); // Get the top position of the ball as an integer 
    // Converting string to an integer to allows perfoming numerical calculations and position based on the ball position
    const ballLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // Get the left position of the ball as an integer 
    // Converting string to an integer to allows perfoming numerical calculations and position based on the ball position
    const gif = document.createElement("img"); // create a new img element for the gif
    gif.setAttribute("src", "./images/ronaldo.gif"); // set the image source of the gif  
    gif.setAttribute("id", "gif"); // Set the Id of gif to "gif"
    gif.style.top = `${ballTop - 10}px`; // Set the position of the gif above the ball
    gif.style.left = `${ballLeft - 250}px`; // Set the position of the gif left to the ball
    gif.style.scale = "300%"; // 300% means that the ball will be displayed 3 times its original size
    gif.style.position = "absolute"; // Absolute means the gif will be placed exactly where it was specified, using the above top and left values.
    // It will not move around within the gameScreen, its just will be fixed were it was specified.
    
    this.gameScreen.appendChild(gif); // Add the gif to the gameScreen. The gif is added as a child of gameScreen element
    // The gif is now a part of the gameScreen, becoming visible in the browser



  // Remove gif from the gameScreen

    setTimeout(() => {
      gif.remove(); // Remove gif from the gameScreen after 2000 miliseconds (2 seconds)
    }, 2000);
  }



  // Method to create the ball shooting animation

  animate(pos) {
    const ball = document.querySelector(".football"); // Select the ball element
    let interval; // Create a variable with the name "interval" not initialized with a value
    let maxTimeMs = 2000; // Set the maximum animation time to 2000 miliseconds (2 seconds)
    // The 2000 value is interpreted as milliseconds because milliseconds are the standart unity for javaScript functions related with time
    // "Ms" stands for milliseconds, making clear that the value is intended to represent milliseconds
    const distanceLeft = 465; 
    const distanceRight = 865;
    const maxTop = 400;

    if (pos === "center") { // Checks if the player input is "center", if its true, executes the code inside
      interval = setInterval(() => { // Repeatedly executes the code inside "setInterval" with a fixed time delay between each call
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // Initialize the variable "currentTop" with top position of the ball as an integer
        if (maxTimeMs === 0) clearInterval(interval); // Stop the ball shooting animation if "maxTimeMs" has passed
        if (currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`; /* If the top edge of the ball doesn't reach the "maxtop" value,
        the code will increase the ball vertical position by less 10 pixels every time the code runs until the ball reaches the "maxtop" value */
      }, 10); // Every 10 seconds the code inside the "setInterval" will run and, because of that, it will creates a continuous smooth visual effect for the ball shooting animation

    } else if (pos === "left") { // Checks if the player input is "left", if its true, executes the code inside
      interval = setInterval(() => { // Repeatedly executes the code inside "setInterval" with a fixed time delay between each call
        if (maxTimeMs === 0) clearInterval(interval); // Stop the ball shooting animation if "maxTimeMs" has passed
        maxTimeMs -= 50; // ????????????????????????????????????????????????????????????????????????????????????????????????
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // Initialize the variable "currentTop" with top position of the ball as an integer
        const currentLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // Initialize the variable "currentLeft" with left position of the ball as an integer
        if (currentLeft !== distanceLeft) ball.style.left = `${currentLeft - 8}px`; /* If the left edge of the ball doesn't reach the "distanceLeft" value,
        the code will increase the ball horizontal position by less 8 pixels every time the code runs until the ball reaches the "distanceLeft" value */
        if(currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`; /* If the top edge of the ball doesn't reach the "maxtop" value,
        the code will increase the ball vertical position by less 10 pixels every time the code runs until the ball reaches the "maxtop" value */
      }, 10); // Every 10 seconds the code inside the "setInterval" will run and, because of that, it will creates a continuous smooth visual effect for the ball shooting animation

    } else if (pos === "right") { // Checks if the player input is "right", if its true, executes the code inside
      interval = setInterval(() => { // Repeatedly executes the code inside "setInterval" with a fixed time delay between each call
        if (maxTimeMs === 0) clearInterval(interval); // Stop the ball shooting animation if "maxTimeMs" has passed
        maxTimeMs -= 50; // ????????????????????????????????????????????????????????????????????????????????????????????????
        const currentLeft = parseInt(ball.style.left.slice(0, ball.style.left.length - 2)); // Initialize the variable "currentLeft" with left position of the ball as an integer
        const currentTop = parseInt(ball.style.top.slice(0, ball.style.top.length - 2)) // Initialize the variable "currentTop" with top position of the ball as an integer
        if (currentLeft !== distanceRight) ball.style.left = `${currentLeft + 8}px`; /* If the right edge of the ball doesn't reach the "distanceRight" value,
        the code will increase the ball horizontal position by more 8 pixels every time the code runs until the ball reaches the "distanceRight" value */
        if(currentTop !== maxTop) ball.style.top = `${currentTop - 10}px`;  /* If the top edge of the ball doesn't reach the "maxtop" value,
        the code will increase the ball vertical position by less 10 pixels every time the code runs until the ball reaches the "maxtop" value */
      }, 10); // Every 10 seconds the code inside the "setInterval" will run and, because of that, it will creates a continuous smooth visual effect for the ball shooting animation
    }
  }



  // Method to update the visual indicators (red arrows) based on selected direction to shoot
  // It changes the opactity of the red arrows to highlight the selected direction to shoot
  // It helps player to understand his current selected direction

  move(selectedDirection) {
    const left = document.getElementById("left"); //Select the element with Id "left" (in this case the left red arrow)
    const right = document.getElementById("right"); //Select the element with Id "right" (in this case the right red arrow)
    const center = document.getElementById("center"); //Select the element with Id "center" (in this case the front red arrow)
    switch (selectedDirection) { // Based on the player input (coming from "function keydownHandler(event)")
      case "center":
        center.style.opacity = "100%"; // Case player press the key "ArrowUp" on keyboard, the front red arrow will be highlighted to 100%
        left.style.opacity = "40%"; // Case player press the key "ArrowUp" on keyboard, the left red arrow will have the opacity of 40%
        right.style.opacity = "40%"; // Case player press the key "ArrowUp" on keyboard, the left red arrow will have the opacity of 40%
        break; // Brake statement for the code not execute the subsequent cases
      case "left":
        center.style.opacity = "40%"; // Case player press the key "ArrowLeft" on keyboard, the front red arrow will have the opacity of 40%
        left.style.opacity = "100%"; // Case player press the key "ArrowLeft" on keyboard, the left red arrow will be highlighted to 100%
        right.style.opacity = "40%"; // Case player press the key "ArrowLeft" on keyboard, the right red arrow will have the opacity of 40%
        break; // Brake statement for the code not execute the subsequent cases
      case "right":
        center.style.opacity = "40%"; // Case player press the key "ArrowRight" on keyboard, the front red arrow will have the opacity of 40%
        left.style.opacity = "40%"; // Case player press the key "ArrowRight" on keyboard, the left red arrow will have the opacity of 40%
        right.style.opacity = "100%"; // Case player press the key "ArrowRight" on keyboard, the right red arrow will be highlighted to 100%
        break; // Brake statement for the code not execute the subsequent cases
    }
  }
}
