let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn"); 
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let  turnO = true;
 const winPatterns = [
  [0,1,2],
  [0,3,6],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
 ];

 boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
   if(turnO){
    box.innerText = "O";
    turnO = false;
    // box.disabled = true;
   }else{
    box.innerText = "X";
    turnO = true;
    // box.disabled = true;
   }
   box.disabled = true;
   
   checkWinner();
  });
 });

 const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
 };
const disableBoxes = () => {
  for (let box of boxes){
   box.disabled = true; 
  }
};

const enableBoxes = () => {
  for (let box of boxes){
   box.disabled = false; 
   box.innerText= "";
  }
};
 const checkWinner = () =>{
   for ( let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText; 
    let pos2Val = boxes[pattern[1]].innerText; 
    let pos3Val = boxes[pattern[2]].innerText; 

    if(pos1Val != "" && pos2Val != "" && pos3Val!=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val ){
        showWinner(pos1Val);
      }
    }
  }
 };

 const resetGame = () =>{
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
 }


newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);