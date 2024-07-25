// The script.js sets up the game interface by connecting HTML elements to the game functionalities
// Handles the game start action, the game reset action and keyboard inputs from the player
// Imputs from the player to control direction of the ball and ball shooting animation

// Ensure that everything inside "window.onload" function will run after the entire webpage has fully loaded
window.onload = function () { // THe "onload" event executes JavaScipt code immediately after a page has been loaded



  // Selecting HTML elements allows to interact with them and handle their behavior or appearance
  const startBtn = document.getElementById("start-button"); // Gets the element with Id "start-button" and stores it in variable "startBtn"
  const gameIntro = document.getElementById("game-intro"); // Not using in script.js (can be deleted)
  const gameScreen = document.getElementById("game-screen"); // Not using in script.js (can be deleted)
  const gameEnd = document.getElementById("game-end"); // Not using in script.js (can be deleted)
  const restartBtn = document.getElementById("restart-button"); // Gets the element with Id "restart-button" and stores it in variable "restartBtn"
  const game = new Game(); /* Creates a new object from the game Class (localizated in game.js) and stores the new object in varialbe "game"
  The new object will now have access to all the properties and methods defined in "class Game" */



  // Start the game when "startBtn" is clicked
  startBtn.addEventListener("click", () => { /* THe "addEventListener" attaches an event handler to the specified element, in this case,
  the HTML DOM Event type is "click" */
    game.start(); // It comes from game.js
    // Explanation in game.js ?????????????????????????????????????????????????????????????????????????????????????????
  });



  // Reload the HTML document when "restartBtn" is clicked
  restartBtn.addEventListener("click", () => { /* THe "addEventListener" attaches an event handler to the specified element, in this case,
    the HTML DOM Event type is "click" */
    location.reload(); // Method to reload the HTML document, does the same as reload button in the browser
  });



  // Handle keyboard inputs to control the direction of the ball and ball shooting animation
  function keydownHandler(event) {
    const key = event.key; // Save the value of the pressed key into the variable "key" for using it in the function
    const possibleKeys = ["ArrowUp", "ArrowLeft", "ArrowRight", " "]; // An array of keys defining the possible keyboard inputs
    // "ArrowUp", "ArrowLeft", "ArrowRight", " " are standard names for arrow keys on keyboard that the code assumes as default
    if (possibleKeys.includes(key)) { // Determines if "possibleKeys" array includes "key" values and if its true, returns true
      switch (key) { // Switch statement checks the value of "key" and runs the appropriate code for each specific key value (each case) 
        case " ":
          game.shoot(); // If key is " " code will excute game.shoot (localitzated in "game.js")
          // This makes the ball animation starts ???????????????????????????????????????????????????????????????????????????????
          break; // Brake statement for the code not execute the subsequent cases
        case "ArrowUp":
          game.selectedDirection = "center";
          game.changeDirection();
          break; // Brake statement for the code not execute the subsequent cases
        case "ArrowLeft":
          game.selectedDirection = "left";
          game.changeDirection();
          break; // Brake statement for the code not execute the subsequent cases
        case "ArrowRight":
          game.selectedDirection = "right";
          game.changeDirection();
          console.log(key);
          break; // Brake statement for the code not execute the subsequent cases
      }
    }
  }

  window.addEventListener("keydown", keydownHandler); /* Tell the browser to call "keydownHandler" function whenever the event occurs, in this case,
  The "keydown" event that occurs when a key from keyboard is down */ 
};
