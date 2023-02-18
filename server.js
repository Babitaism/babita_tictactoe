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
  database: "babita_first_game",
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});


let style = `<link rel="stylesheet" href="./index.css">`;
let script = `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src='game.js'></script>
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
let message = `<button onclick="myFunction()"id = "messageSection">Game Over<strong></strong></button> `
return message
}

function playerTurn(){
  let message = `<div id = "message"></div> `
  return message
  }

function gameHeaders(names1,names2) {
  let headers = `
  <p><strong> <div id = "msg"> ${names1} </div> starts as Player X<br></br> And <br></br> <div id = "msg1"> ${names2}</div> as Player 0 </strong> </p>  `;
  return headers;
}

function restartButton() {
  let resButton = `<button id = "btn" onclick="restart()">Restart</button>`;
  return resButton;
}

function startButton() {
  let staButton = `<button id = "btn" onclick="start()">Start</button>`;
  return staButton;
}

function dashboardButton() {
  let dashButton = `<button id = "dash" onclick="window.open('/getDashboard')">Dashboard</button>`;
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
  let staButton = startButton();
  let dashButton = dashboardButton();
  let gameBoard = `<table  onload="myFunction()"> ${output}</table>`
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
    ${staButton}
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

