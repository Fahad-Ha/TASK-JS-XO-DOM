// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
let player1 = true;
let isGameOver = false;
let winner = "X";

function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  alert(`${winner} wins`);
}
// if (confirm(`Horraaay, ${winner} wins!`)) {
//   console.log("Reset");
//   // The code here will be exectued if you press on OK button that will pop on the window
// }

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");
/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  if (isGameOver == false) {
    if (
      document.getElementById(index).innerHTML == "X" ||
      document.getElementById(index).innerHTML == "O"
    ) {
      return;
    }
    player1 ? fillButton(index, "X") : fillButton(index, "O");
    player1 = !player1;
    if (
      document.getElementById(board[0][0]).innerHTML == "X" &&
      document.getElementById(board[0][1]).innerHTML == "X" &&
      document.getElementById(board[0][2]).innerHTML == "X"
    ) {
      return winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[1][0]).innerHTML == "X" &&
      document.getElementById(board[1][1]).innerHTML == "X" &&
      document.getElementById(board[1][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[2][0]).innerHTML == "X" &&
      document.getElementById(board[2][1]).innerHTML == "X" &&
      document.getElementById(board[2][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[3][0]).innerHTML == "X" &&
      document.getElementById(board[3][1]).innerHTML == "X" &&
      document.getElementById(board[3][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[4][0]).innerHTML == "X" &&
      document.getElementById(board[4][1]).innerHTML == "X" &&
      document.getElementById(board[4][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[5][0]).innerHTML == "X" &&
      document.getElementById(board[5][1]).innerHTML == "X" &&
      document.getElementById(board[5][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[6][0]).innerHTML == "X" &&
      document.getElementById(board[6][1]).innerHTML == "X" &&
      document.getElementById(board[6][2]).innerHTML == "X"
    ) {
      winningAlert("X");

      isGameOver = true;
    } else if (
      document.getElementById(board[7][0]).innerHTML == "X" &&
      document.getElementById(board[7][1]).innerHTML == "X" &&
      document.getElementById(board[7][2]).innerHTML == "X"
    ) {
      isGameOver = true;
      winningAlert("X");
    } else if (
      document.getElementById(board[6][0]).innerHTML == "O" &&
      document.getElementById(board[6][1]).innerHTML == "O" &&
      document.getElementById(board[6][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[1][0]).innerHTML == "O" &&
      document.getElementById(board[1][1]).innerHTML == "O" &&
      document.getElementById(board[1][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[2][0]).innerHTML == "O" &&
      document.getElementById(board[2][1]).innerHTML == "O" &&
      document.getElementById(board[2][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[3][0]).innerHTML == "O" &&
      document.getElementById(board[3][1]).innerHTML == "O" &&
      document.getElementById(board[3][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[4][0]).innerHTML == "O" &&
      document.getElementById(board[4][1]).innerHTML == "O" &&
      document.getElementById(board[4][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[5][0]).innerHTML == "O" &&
      document.getElementById(board[5][1]).innerHTML == "O" &&
      document.getElementById(board[5][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[6][0]).innerHTML == "O" &&
      document.getElementById(board[6][1]).innerHTML == "O" &&
      document.getElementById(board[6][2]).innerHTML == "O"
    ) {
      winner = "O";
      isGameOver = true;
      winningAlert("O");
    } else if (
      document.getElementById(board[7][0]).innerHTML == "O" &&
      document.getElementById(board[7][1]).innerHTML == "O" &&
      document.getElementById(board[7][2]).innerHTML == "O"
    ) {
      winner = "O";

      isGameOver = true;
      winningAlert("O");
    }
    // fillButton(index, "O");}
  }
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
