let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let winningMsg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
//store winning partners(2D array)
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnX = true;//player X
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnX) {
            box.innerText = 'X';
            turnX = false;
        }
        else {
            box.innerText = 'O';
            turnX = true;
        }
        //dislabe every box after entering innerText.
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    //check for each pattern
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val!= "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val=== pos3val) {
                let winner = pos1val;
                // alert(`winner is player-${winner}`);

                showWinner(winner);
            }
        }
    }
};


const showWinner=(winner)=>{
    winningMsg.innerText=`Congrats to winner!! Player '${winner}'`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
};
const enableBoxes=()=>{
for(let box of boxes)
    {
        box.innerText="";
        box.disabled=false;
    }
}
const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click",resetGame);