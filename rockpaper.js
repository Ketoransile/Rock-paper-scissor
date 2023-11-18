function getComputerChoice(){
    const choices=["rock", "paper", "scissor"]
    const randomnumber= Math.floor(Math.random()*choices.length)
   return choices[randomnumber]
}
function playRound(playerSelection, computerSelection) {
    
    playerSelection=playerSelection.toLowerCase();
    if(playerSelection==="rock"&&computerSelection==="scissor"||
    playerSelection==="paper"&&computerSelection==="rock"||
    playerSelection==="scissor"&&computerSelection==="paper"){
        return "player wins"
    }
    else if(playerSelection==="rock"&&computerSelection==="paper"||
    playerSelection==="paper"&&computerSelection==="scissor"||
    playerSelection==="scissor"&&computerSelection==="rock"){
        return "computer wins"
    }
    else {
        return "It's a tie"
    }
    /*
    if(playerSelection==="rock"&&computerSelection==="scissor"){
            return "Congrats rock beats scissor";
    }
    else if(playerSelection==="rock"&&computerSelection==="paper"){
        return "You lose paper beats rock"
    }
    else if(playerSelection==="paper"&&computerSelection==="rock"){
        return "congrats paper beats rock"
    }
    else if(playerSelection==="paper"&&computerSelection==="scissor"){
        return "You lose paper scissor beats paper"
    }
    else if(playerSelection==="scissor"&&computerSelection==="paper"){
        return "congrats scissors beat paper"
    }
    else if(playerSelection==="scissor"&&computerSelection==="rock"){
        return "You lose rock beats scissor"
    }
    else{
        return "Draw no one won because both of you chose the same !!"
    }*/
  }
  let playerwins=0;
  let computerwins=0;
  for (let i=0;i<=4;i++){
    const playerSelection=prompt("choose from rock, paper, scissor");
   const computerSelection=getComputerChoice();
    const  result= playRound(playerSelection, computerSelection);
    
   console.log("you chose: "+playerSelection)
   console.log("computer chose: "+computerSelection)
   console.log("Result: "+result)
   
   if(result==="player wins"){
    playerwins++;
   }
   else if(result==="computer wins"){
    computerwins++;
   }

  }
  if(playerwins>computerwins){
    console.log("Total Winner is You")
  }
  if(playerwins<computerwins){
    console.log("Total Winner is computer")
  }
  if(playerwins===computerwins){
    console.log("Draw: Both of you scored same")
  }