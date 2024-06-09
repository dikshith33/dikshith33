let boxes=document.querySelectorAll(".box");
let reset=document.getElementById("reset");
let win=document.getElementById("msg");
let newgame=document.getElementById("newgame");
let winner=document.getElementsByClassName("winner-msg");

const winnningpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let turn=true;
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
   
    if(turn){
        box.innerHTML="X";
        turn=false;
    }
    else{
        box.innerHTML="O";
        turn=true;
    }
    box.disabled=true;
    checkwinner();
  });
  
});
  const Newgame =()=>{
    turn=true;
    enablebtn();
    win.innerText="";
  };

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};
const nomore=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(won)=>
    {
      win.innerText=`The Winner is ${won}`;
      winner.classList.remove("hide");
      nomore();
    };
const checkwinner=()=>{
    for( let pattern of winnningpattern){
        let posval=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
    
    if(posval !="" && posval2 !="" && posval3 !=""){
        if(posval==posval2&&posval2==posval3){
            console.log("winner is",posval);
            showWinner(posval);
        }
    }
}};
newgame.addEventListener("click",Newgame);
reset.addEventListener("click",Newgame);
