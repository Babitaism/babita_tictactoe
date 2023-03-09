let matrix; // TODO:: BAD Practice
let len; //// TODO:: BAD Practice
let gameOver = false; //// TODO:: BAD Practice
function gameBox(hiddenFieldvaluer) {
  return matrix; 
}

let object = {};
function collectInfo(object) {
  return object;
}

let turn = 1;
let array = [];
function ticTacToe(clickedId) {
  if (gameOver) {
    return;
  }
  let value = document.getElementById(`cell${clickedId}`);
  if (value.innerHTML == "X" || value.innerHTML == "0") {
    return;
  }
  let player2 = document.getElementById("msg1").innerHTML;
  document.getElementById("message").innerHTML = `${player2} turn`;
  if (turn == 1) {
    if (value.innerHTML == " ") {
      value.innerHTML = "X";
    }
    let indexes = clickedId.split("");
    array.push(indexes);
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
    array.push(indexes);
    let indexAtZero = indexes[0];
    let indexAtOne = indexes[1];
    matrix[`${indexAtZero}`][`${indexAtOne}`] = "0";
    turn = 1;
  }
  let result = whoWins();
  let output = toggleGameOver();
}

function isAllElementsAreEqual(array) {
  let flag = true;
  let len = array.length;
  let firstElement = array[0];
  for (let i = 0; i < len; i++) {
    if (array[i] == 'blank') {
      flag = false;
      break;
    }
    if (array[0] != array[i]) {
      flag = false;
      break;
    }
  }
  return { result: flag, element: firstElement};
}

function rowChecker(matrix, array) {
  let result = false;
  len = matrix.length;
  object.matrixLength = len
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
      index = i
      console.log(index,"index")
      let len = matrix.length
      object.matrix = matrix;
      let rowIndexes = "";
      for (let j = index; j <= index; j++) {
        let temp = ""
        for (let k = 0; k < len-1; k++) {
          temp+= `${j}${k}` +"," ;
        }
        for (let k = len-1; k <= len-1; k++) {
            temp+= `${j}${k}` 
        }
        rowIndexes+= temp;
        object.index = rowIndexes
      }
      break;
    }
  }
  return result;
}

function columnChecker(matrix, array) {
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
      index = i
      let len = matrix.length
      object.matrix = matrix;
      let colIndexes = "";
      for (let j = index; j <= index; j++) {
        let temp = "";
        let ch = ","
        for (let k = 0; k < len-1; k++) {
          temp+= `${k}${j}` + ch
        }
        for (let k = len-1; k <= len-1; k++) {
          temp+= `${k}${j}` 
      }
        colIndexes+= temp
        object.index = colIndexes
        console.log(colIndexes)
      }
      break;
    }
}
return result
}

function leftDiagonalChecker(matrix, array) {
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
      object.matrix = matrix;
      index = i
      let len = matrix.length
      object.matrix = matrix;
      let leftDiagIndexes = "";
      for (let j = 0; j < len ; j++) {
        let temp = "";
        let ch =","
        if(j==len-1){
          ch = ""
        }
        for (let k = j; k <= j; k++) {
          temp+= `${j}${k}` + ch
        }
        leftDiagIndexes+= temp
        object.index = leftDiagIndexes
      }
      break;
    }
  }
  return result;
}

function rightDiagonalChecker(matrix, array) {
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
    if (result.result == true) {
      object.matrix = matrix;
      index = i
      let len = matrix.length
      let value = len - 1;
      object.matrix = matrix;
      let rightDiagIndexes = "";
      for (let j = 0; j < len ; j++) {
        let ch =","
        if(j==len-1){
          ch = ""
        }
        for (k = 0; k < len; k++) {
          if (value == j + k) {
       rightDiagIndexes+= `${j}${k}` + ch ;
          }
        }
      }
        object.index = rightDiagIndexes 
  }
    }
  return result;
}

let temp = [];
function whoWins() {
  let rowCheckResult = rowChecker(matrix, array);
  let colCheckResult = columnChecker(matrix, array);
  let leftDiagCheck = leftDiagonalChecker(matrix, array);
  let rightDiagCheck = rightDiagonalChecker(matrix, array);

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
    let winningPlayer = winnerPlayer(element);
    let opponentPlayer = loserPlayer(element);
    printWinnerOnScreen(winningPlayer);
    object.winner = winningPlayer;
    object.opponent = opponentPlayer;
   
    if (printWinnerOnScreen) {
      let collectiveData = collectInfo(object);
      console.log(collectiveData);
    }
  }
}


function printWinnerOnScreen(winningPlayer) {
  document.getElementById(
    "message"
  ).innerHTML = `${winningPlayer} won the match`;
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
  winner = element == "X" ? player1 : player2;
  return winner;
}

function loserPlayer(element) {
  let player1 = document.getElementById("msg").innerHTML;
  let player2 = document.getElementById("msg1").innerHTML;
  opponent = element == "X" ? player2 : player1;
  return opponent;
}

function toggleGameOver() {
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
  gameOver = true
  document.getElementById("message").innerHTML = "";
}

$(document).ready(function () {
  let hiddenFieldvalue = document.getElementById("simpleHack").value;
  let num = Number(hiddenFieldvalue);
  matrix = new Array(num)
    .fill('blank')
    .map(() => new Array(num).fill('blank'));
});



function submitDetails(){
let gameDetails = {
  Winner: object.winner,
  WinningIndex: object.index,
  Opponent : object.opponent,
  WinningMatrix : object.matrix,
  MatrixLength : object.matrixLength
}


console.log("Submitting Details to Server",gameDetails)

let postArgument = {
  type: "POST",
  url: "/test",
  data: gameDetails,
  success: function xyz(serverResponse){
   console.log("Response from server is :" , serverResponse)
  }  
}
$.post(postArgument);
}

