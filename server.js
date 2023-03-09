const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connectionStr = mysql.createConnection({
  host: "localhost",
   user: "root",
  password: "babita_360703",
  database: "babita_first_web",
});

//connect to mysql
connectionStr.connect(err => {
  if (err) {
    throw err
  }
  console.log("MYSQL Connected")
})

//Create Database

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));


let style = `<link rel="stylesheet" href="./index.css">`;
let script = `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src='game.js'>

</script>
`

function htmlGenerator(value) {
  let tablebody = "";
  let tr = "";
  let td = "";
  for (let i = 0; i <= value-1; i++) {
    tr = "";
    td = "";
    for (let j = 0; j <= value-1; j++) {
      td += `<td>
              <div class = "box" id = "cell${[i]}${[j]}" onclick = "ticTacToe('${[i]}${[j]}')"> </div>
            </td>`;
    }
    tr = `<tr>` + td + `</tr>`;
    tablebody += tr;
  }
  return tablebody;
}

function messageSection(){
let message = `<button onclick="toggleGameOver()"id = "messageSection">Game Over<strong></strong></button> `
return message
}

function playerTurn(){
  let message = `<div id = "message"></div> `
  return message
  }

function gameHeaders(names1,names2) {
  let headers = `
  <strong> <p> <div id = "msg"> ${names1} </div> starts as Player X<br></br> And <br></br> <div id = "msg1"> ${names2}</div> as Player 0  </p> </strong> `;
  return headers;
}

function restartButton() {
  let resButton = `<button id = "btn" onclick="restart()">Restart</button>`;
  return resButton;
}


function dashboardButton() {
  let dashButton = `<button id = "dash" onclick="submitDetails()">Submit Game Details</button> `;
  return dashButton;
}

app.get("/index.css", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.css");
});

app.get("/game.js", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/game.js");
});

app.get("/tic-tac-toe?", (req, res) => {
  console.log(req.query)
  console.log(req.query.fname)
  console.log(req.query.lname)
  let matrix = req.query
  let output = htmlGenerator(matrix.m);
  let simpleHack = `<input type = 'hidden' id = 'simpleHack' value=${matrix.m}>`
  let headers = gameHeaders(req.query.fname,req.query.lname);
  let resButton = restartButton();
  let dashButton = dashboardButton();
  let gameBoard = `<table  onload="toggleGameOver()"> ${output}</table>`
  let messageSent = messageSection();
 let playerturn = playerTurn()
  res.send(`
    ${style}
    ${script}
    ${headers}
    ${simpleHack}
    ${gameBoard}
    <br></br>
    ${resButton}
    ${dashButton}
    ${messageSent}
    ${playerturn}
    `);
});

app.get("/index.css", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.css");
});


app.get("/start-Game", (req, res) => {
  console.log(req.query)
  res.send(`
  <p>Tic-Tac-Toe-Matrix</p>
  <p>Choose your Matrix:</p> 
   <form method = POST action="/tic-tac-toe1" id='babita_first_game'>
  <input type="radio" id="matrix3" name="chooseMatrix" value="3">
  <label for="matrix3">3*3</label><br>
  <input type="radio" id="matrix5" name="chooseMatrix" value="5">
  <label for="matrix5">5*5</label><br>
  <input type="radio" id="javascript" name="chooseMatrix" value="7">
  <label for="javascript">7*7</label><br><br>
  <label for="fname">Player 1 Name:</label>
  <input type="text" id="fname" name="firstPlayername"><br><br>
  <label for="lname"> Player 2 Name:</label>
  <input type="text" id="lname" name="secondPlayername"><br><br>
  <input type="button" id = "sub" value="Submit" onclick = "submit()" > 
  </form> `);
});


app.post("/tic-tac-toe1", (req, res) => {
 console.log("jj", req.body.chooseMatrix)
//  console.log("fname",req.body.firstPlayername)
//  console.log("lname",req.body.secondPlayername)
 res.redirect(`/tic-tac-toe?m=${req.body.chooseMatrix}&fname=${req.body.firstPlayername}&lname=${req.body.secondPlayername}`);
})

app.post("/test", (req, res) => {

  let winner =  req.body.Winner
  let opponent = req.body.Opponent
  let index = req.body.WinningIndex
  let matrix = req.body.WinningMatrix
  let matrixLength = req.body.MatrixLength
  console.log(req.body)



  let sql = `INSERT INTO TictactoeDetails (Winner, Opponent, Matrix, Indexes, MatrixLength) VALUES ("${winner}","${opponent}","${matrix}","${index}","${matrixLength}")`

  connectionStr.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.json({
     Message: "Game Details Saved"
  })
  //return res.redirect(req.get('/getUserDetails'));
})



function selectDetails(userId){
  alert("Are you sure you want to delete")
fetch("/test", {
            method: "POST",
            // Adding body or contents to send
              body: JSON.stringify({
               userId: req.body
               }),
              headers: {
              "Content-type": "application/json; charset=UTF-8"
              }
           })

// Converting to JSON
.then(response => response.json()) //igonre this
// Displaying results to console
.then((json) => {
    console.log(json)
})

}


