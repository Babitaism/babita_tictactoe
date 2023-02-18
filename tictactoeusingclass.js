<!DOCTYPE html>
<html>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<head>
  <title>
    Babita's Tic-Tac-Toe
  </title>
  <link rel="stylesheet" href="./index.css">
</head>
<body>
  <div id = "messageSection"> <strong> </strong></div> 
  <div id = "Main" >
    <p><strong>First player starts as Player X<br></br> And <br></br> Second Player as Player 0 </strong> </p>   
<table>
    <tr>
      <th div class = "box" id = cell1  onclick = "ticTacToe(cell1)"></th>
      <th div class = "box" id = cell2  onclick = "ticTacToe(cell2)"></th>
      <th div class = "box" id = cell3  onclick = "ticTacToe(cell3)"></th></tr>
    <tr>
      <th div class = "box" id = cell4  onclick = "ticTacToe(cell4)"></th>
      <th div class = "box" id = cell5  onclick = "ticTacToe(cell5)"></th>
      <th div class = "box" id = cell6  onclick = "ticTacToe(cell6)"></th></tr>
    <tr>
      <th div class = "box" id = cell7  onclick = "ticTacToe(cell7)"></th>
      <th div class = "box" id = cell8  onclick = "ticTacToe(cell8)"></th>
      <th div class = "box" id = cell9  onclick = "ticTacToe(cell9)"></th></tr>
</table>
<br></br>

</div>
<form method="POST" action='babita_first_game' id='babita_first_game'></form>
<br></br>
<button id = "btn" onclick="start()">Start</button>
<br></br>
</body>
<script>

let turn = 1
let win
let pla1,pla2
function start(){
document.getElementById("messageSection").innerHTML = `${pla1} turn`
let arrElem = document.getElementsByClassName("box")
for(i in arrElem){
  arrElem[i].innerHTML=""
}
}
function ticTacToe(clickedId){ 
if(clickedId.innerHTML != "") return
 if(turn==1){
  clickedId.innerHTML = "X"
  document.getElementById("messageSection").innerHTML = `${pla2} turn`
  turn = 2
 }
 else if(turn==2){
  clickedId.innerHTML = "0"
  document.getElementById("messageSection").innerHTML = `${pla1} turn`
  turn = 1
 }
let arrElem = document.getElementsByClassName("box")
if(arrElem[0].innerHTML=="X" && arrElem[1].innerHTML=="X" && arrElem[2].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[0].innerHTML=="0" && arrElem[1].innerHTML=="0" && arrElem[2].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[3].innerHTML=="X" && arrElem[4].innerHTML=="X" && arrElem[5].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[3].innerHTML=="0" && arrElem[4].innerHTML=="0" && arrElem[5].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[6].innerHTML=="X" && arrElem[7].innerHTML=="X" && arrElem[8].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[6].innerHTML=="0" && arrElem[7].innerHTML=="0" && arrElem[8].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[0].innerHTML=="X" && arrElem[3].innerHTML=="X" && arrElem[6].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[0].innerHTML=="0" && arrElem[3].innerHTML=="0" && arrElem[6].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML =`${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[1].innerHTML=="X" && arrElem[4].innerHTML=="X" && arrElem[7].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[1].innerHTML=="0" && arrElem[4].innerHTML=="0" && arrElem[7].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[2].innerHTML=="X" && arrElem[5].innerHTML=="X" && arrElem[8].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[2].innerHTML=="0" && arrElem[5].innerHTML=="0" && arrElem[8].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[0].innerHTML=="X" && arrElem[4].innerHTML=="X" && arrElem[8].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[0].innerHTML=="0" && arrElem[4].innerHTML=="0" && arrElem[8].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}
if(arrElem[2].innerHTML=="X" && arrElem[4].innerHTML=="X" && arrElem[6].innerHTML=="X") { 
  document.getElementById("messageSection").innerHTML = `${pla1} won`
  window.alert(`${pla1} won`)
}
else if(arrElem[2].innerHTML=="0" && arrElem[4].innerHTML=="0" && arrElem[6].innerHTML=="0") {
  document.getElementById("messageSection").innerHTML = `${pla2} won`
  window.alert(`${pla2} won`)
}

}





  </script>


</html>