let matrix;
let len;
let gameOver = false;
function gameBox(hiddenFieldvaluer) {
  return matrix;
}

let turn = 1;
function ticTacToe(clickedId) {
  if (gameOver) {
    return;
  }
  let value = document.getElementById(`cell${clickedId}`);
  let player2 = document.getElementById("msg1").innerHTML;
  document.getElementById("message").innerHTML = `${player2} turn`;
  if (turn == 1) {
    if (value.innerHTML == " ") {
      value.innerHTML = "X";
    }
    let indexes = clickedId.split("");
    let indexAtZero = indexes[0];
    let indexAtOne = indexes[1];
    matrix[`${indexAtZero}`][`${indexAtOne}`] = "X";
    turn = 2;
  } else if (turn == 2) {
    let player1 = document.getElementById("msg").innerHTML;
    document.getElementById("message").innerHTML = `${player1} turn`;
    if (value.innerHTML == " ") {
      value.innerHTML = "0";
    }
    let indexes = clickedId.split("");
    let indexAtZero = indexes[0];
    let indexAtOne = indexes[1];
    matrix[`${indexAtZero}`][`${indexAtOne}`] = "0";
    turn = 1;
  }
  let result = whoWins();
  let output = myFunction();
}

function isAllElementsAreEqual(array) {
  let flag = true;
  let len = array.length;
  let firstElement = array[0];
  for (let i = 0; i < len; i++) {
    if (array[i] == undefined) {
      flag = false;
      break;
    }
    if (array[0] != array[i]) {
      flag = false;
      break;
    }
  }
  return { result: flag, element: firstElement };
}

function rowChecker() {
  let result = false;
  len = matrix.length;
  let rows = [];
  for (i = 0; i < len; i++) {
    let temp = [];
    for (j = 0; j < len; j++) {
      temp.push(matrix[i][j]);
    }
    rows.push(temp);
  }
  for (let i in rows) {
    result = isAllElementsAreEqual(rows[i]);
    if (result.result == true) {
      break;
    }
  }
  return result;
}

function columnChecker() {
  let result = false;
  len = matrix.length;
  let cols = [];
  for (i = 0; i < len; i++) {
    let temp = [];
    for (j = 0; j < len; j++) {
      temp.push(matrix[j][i]);
    }
    cols.push(temp);
  }
  for (let i in cols) {
    result = isAllElementsAreEqual(cols[i]);
    if (result.result == true) {
      break;
    }
  }
  return result;
}

function leftDiagonalChecker() {
  let result = false;
  let leftDiag = [];
  for (i = 0; i < len; i++) {
    for (j = i; j <= i; j++) {
      leftDiag.push(matrix[i][j]);
    }
  }
  for (let i in leftDiag) {
    result = isAllElementsAreEqual(leftDiag);
    if (result.result == true) {
      break;
    }
  }
  return result;
}

function rightDiagonalChecker() {
  let result = false;
  let len = matrix.length;
  let value = len - 1;
  let rightDiag = [];
  for (i = 0; i < len; i++) {
    for (j = 0; j < len; j++) {
      if (value == i + j) {
        rightDiag.push(matrix[i][j]);
      }
    }
  }
  for (let i in rightDiag) {
    result = isAllElementsAreEqual(rightDiag);
  }
  return result;
}

function whoWins() {
  let rowCheckResult = rowChecker(matrix);
  let colCheckResult = columnChecker(matrix);
  let leftDiagCheck = leftDiagonalChecker(matrix);
  let rightDiagCheck = rightDiagonalChecker(matrix);

  if (
    rightDiagCheck.result == true ||
    leftDiagCheck.result == true ||
    colCheckResult.result == true ||
    rowCheckResult.result == true
  ) {
    gameOver = true;
    let allCombinations = {
      rightDiagCheck,
      leftDiagCheck,
      colCheckResult,
      rowCheckResult,
    }; //TODO:
    let element = winnerElement(allCombinations);
    console.log('element', element)
    let winningPlayer = winnerPlayer(element);
    console.log('winnerPlayer', winningPlayer)
    printWinnerOnScreen(winningPlayer)
  }
}

function printWinnerOnScreen(winningPlayer){
 document.getElementById('message').innerHTML =  `${winningPlayer} won the match`
}

function winnerElement(allCombinations) {
  for (let i in allCombinations) {
    if (allCombinations[i].result) {
      return allCombinations[i].element;
    }
  }
}

function winnerPlayer(element) {
  let player1 = document.getElementById("msg").innerHTML;
  let player2 = document.getElementById("msg1").innerHTML;
  winner = element == 'X' ? player1 : player2
  return winner
}

function myFunction() {
  let x = document.getElementById("messageSection");
  if (gameOver == false) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function restart() {
  let cells = document.getElementsByClassName("box");
  for (let i in cells) {
    cells[i].innerHTML = "";
  }
}

$(document).ready(function () {
  let hiddenFieldvalue = document.getElementById("simpleHack").value;
  let num = Number(hiddenFieldvalue);
  matrix = new Array(num)
    .fill(undefined)
    .map(() => new Array(num).fill(undefined));
});
