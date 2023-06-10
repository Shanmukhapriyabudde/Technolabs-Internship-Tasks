const prompt=require('prompt-sync')();
const getUserChoice =(userInput) =>{
if(userInput=='rock' || userInput=='scissors'||userInput =='paper')
return userInput;
else {
   console.log(`error`);
} }
const getcomputerChoice= () => {
let num=Math.random();
num=Math.floor(num*3);
 if (num==0){
   return 'rock';
 }
 else if(num==1){
   return 'paper';
 }
 else if (num==2){
   return 'scissor';
 } }
  function determineWinner(userChoice,computerChoice){
   if(userChoice==computerChoice){
      return 'the game is tied between the players';
   }
   else if(userChoice=='rock'){
      if(computerChoice=='scissor'){
          return 'user won';
      }
      else{
         return 'computer won';
      }

   }
   else if(userChoice=='paper'){
      if(computerChoice=='scissor'){
          return 'computer won';
      }
      else{
         return 'user won';
      } }
      else if(userChoice=='scissor'){
      if(computerChoice=='paper'){
          return 'user won';
      }
      else{
         return 'computer won';
      } }
   
 }
  function playGame() {
    let usersChoice=prompt('enter the choice : ');
    if(usersChoice=='bomb'){
      console.log('user wins');
    } else{
   let userChoice=getUserChoice(usersChoice);
   console.log("User's choice : ",userChoice);
   let computerChoice=getcomputerChoice();
   console.log("computer's Choice : ",computerChoice);
   let a=determineWinner(userChoice,computerChoice);
   console.log(`${a}`);
  } }
  playGame();

  

