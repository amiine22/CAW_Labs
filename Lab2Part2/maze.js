// const boundaries = document.querySelectorAll('.boundary');


// function turnAllRed() {
//     boundaries.forEach(boundary => {
//         boundary.style.backgroundColor = 'red';
//     });
// }


// function resetBoundaries() {
//     boundaries.forEach(boundary => {
//         boundary.style.backgroundColor = '#eeeeee'; 
//     });
// }

// function showWinningAlert() {
//     alert("You win!");
// }

// function restartMaze() {
//     resetBoundaries(); 
// }


// boundaries.forEach(boundary => {
//     boundary.addEventListener('mouseover', turnAllRed);
// });


// const startArea = document.getElementById('S');
// startArea.addEventListener('click', restartMaze);


// startArea.addEventListener('mouseover', resetBoundaries);


// const endArea = document.getElementById('E');
// endArea.addEventListener('mouseover', showWinningAlert);

window.onload = function () {
    // Get all relevant elements for the maze.
    const boundaries = document.querySelectorAll(".boundary");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const maze = document.getElementById("maze");
    const status = document.getElementById("status");
    const timerDom = document.querySelector(".timer");
    let gameLost = false;
    let gameStarted = false;
    let counter = 0;
    let timer = null;
  
    // Function to turn all walls red (you lose state).
    const turnBoundariesRed = () => {
      boundaries.forEach((boundary) => boundary.classList.add("youlose"));
      status.textContent = "You lose!";
      gameLost = true;
    };
  
    // Function to reset the maze walls back to normal.
    const resetBoundaries = () => {
      boundaries.forEach((boundary) => boundary.classList.remove("youlose"));
      status.textContent = "Move your mouse over the 'S' to begin.";
      gameLost = false;
      gameStarted = true;
    };
  
    // Event listener for hovering over any boundary to turn all boundaries red.
    boundaries.forEach((boundary) => {
      boundary.addEventListener("mouseover", function () {
        if (gameStarted && !gameLost) {
          turnBoundariesRed();
          clearInterval(timer);
        }
      });
    });
  
    // Event listener for winning the game when reaching the end.
    end.addEventListener("mouseover", function () {
      if (gameStarted && !gameLost) {
        status.textContent = "You win!";
        gameStarted = false;
        clearInterval(timer);
        // Stop the game after winning.
      }
    });
  
    // Event listener for resetting the maze when clicking on the start.
    start.addEventListener("click", function () {
      resetBoundaries();
      gameStarted = true;
      timer = setInterval(() => {
        timerDom.innerHTML = counter;
        counter++;
      }, 1000); // Indicate the game has started.
    });
  
    // Cheating prevention: detect if the mouse leaves the maze area.
    maze.addEventListener("mouseleave", function () {
      if (gameStarted && !gameLost) {
        turnBoundariesRed(); // Player loses if they leave the maze area.
      }
    });
  };
  