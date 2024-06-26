let user_score = 0;
let ai_score = 0;

let userScoreChange=document.getElementById("human_score");
let AIScoreChange=document.getElementById("AI_score");
let msg=document.getElementById("msg");

let resetBtn=document.querySelector(".reset");

const choices = document.querySelectorAll(".image");

const genCompChoice = () => {
    let choice = ["rock", "paper", "scissors"];
    //rock,paper,scissors
    const num = Math.floor(Math.random() * 3);
    return choice[num];
}

const decideWinner = (uC, cC) => {
    if (uC === "rock" && cC === "paper") {
        console.log("AI won!!paper covers rock");
        ai_score++;
        msg.innerText="AI won!!paper covers rock";
        AIScoreChange.innerText=ai_score.toString();
    }
    else if (uC === "rock" && cC === "scissors") {
        console.log("You won!!scissors can't cut rock");
        user_score++;
        msg.innerText="You won!!scissors can't cut rock";
        userScoreChange.innerText=user_score.toString();
    }
    else if (uC === "paper" && cC === "scissors") {
        console.log("AI won!!scissors cut paper");
        ai_score++;
        msg.innerText="AI won!!scissors cut paper";
        AIScoreChange.innerText=ai_score.toString();
    }
    else if (uC === "paper" && cC === "rock") {
        console.log("You won!!paper covers rock");
        user_score++;
        msg.innerText="You won!!paper covers rock";
        userScoreChange.innerText=user_score.toString();
    }
    else if (uC === "scissors" && cC === "paper") {
        console.log("You won!!scissors cut paper");
        user_score++;
        msg.innerText="You won!!scissors cut paper";
        userScoreChange.innerText=user_score.toString();
    }
    else if (uC === "scissors" && cC === "rock") {
        console.log("You won!!scissors can't cut rock");
        ai_score++;
        msg.innerText="You won!!scissors can't cut rock";
        AIScoreChange.innerText=ai_score.toString();
    }
};


const playGame = (userChoice) => {
    console.log("user Choice=", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("AI Choice=", compChoice);
    decideWinner(userChoice, compChoice);
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`${userChoice} choice is clicked`);
        playGame(userChoice);
    });
})

resetBtn.addEventListener("click",()=>{
    userScoreChange.innerText="0";
    AIScoreChange.innerText="0";
    msg.innerText="Play your move!!";
    user_score=0;
    ai_score=0;
});