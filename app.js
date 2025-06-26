let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".pick");
let msg = document.querySelector("#final");

let user_score = document.querySelector("#user_point");
let comp_score = document.querySelector("#comp_point");

const CompGerante = () =>{
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    const compChoice = options[idx];
    return compChoice;
};

const playGame = (userChoice) =>{
    const compChoice = CompGerante();
    let userWin = false; 
            if(compChoice === "rock"){
                userWin = userChoice === "paper" ? true : false;
            } else if(compChoice === "paper"){
                userWin = userChoice === "scissor" ? true : false;
            } else{
                userWin = userChoice === "rock" ? true : false;
            }
        
    showWin(userWin, compChoice, userChoice);
}

const showWin = (userWin, compChoice, userChoice) =>{
     if(userWin) {
        userScore++;
        user_score.innerHTML = `<p>${userScore}</p>`;
        msg.innerHTML = `<h3>You Win! Your ${userChoice} Beats computer's ${compChoice} </h3>`;
         msg.style.backgroundColor = "green";
        
     } else if( compChoice === userChoice){
                msg.innerHTML = `<h3>Draw! Computer's choice ${compChoice} and Your choice ${userChoice} </h3>`;
                msg.style.backgroundColor = "rgba(255, 149, 0, 0.919)";
            
     } else {
        compScore++;
        comp_score.innerHTML = `<p>${compScore}</p>`;
            msg.innerHTML = `<h3>You lose! Computer's ${compChoice} Beats your ${userChoice} </h3>`;
            msg.style.backgroundColor = "red";
     }
}

choices.forEach((choice) => {
       choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
  });
});