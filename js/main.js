
let attempts=prompt('Enter number of chances:');

const rock = document.querySelector('#r')
const paper = document.querySelector('#p')
const scissor = document.querySelector('#s')

rock.addEventListener('click',() => playGame('rock'))
paper.addEventListener('click',() => playGame('paper'))
scissor.addEventListener('click',() => playGame('scissor'))
const choices = ['rock','paper','scissor'];

let userScore=0;
let compScore=0;
function playGame(userInput){
    if(attempts==0)
    {
        document.querySelector('#result-final-stat').getElementsByTagName('span')[0].innerText = userScore > compScore ? 'USER' : 'COMPUTER';
        setTimeout(() => {
            window.location.reload()
        },3000);
    }
    attempts-=1;
    const compInput = choices[Math.floor(Math.random()*3)];
    // user winning
    document.querySelector('#result-user-stat').getElementsByTagName('span')[0].innerText = userInput;
    document.querySelector('#result-comp-stat').getElementsByTagName('span')[0].innerText = compInput;

        if(userInput == 'rock' && compInput == 'scissor') userScore+=1;
   else if(userInput == 'paper' && compInput == 'rock') userScore+=1
   else if(userInput == 'scissor' && compInput == 'paper') userScore+=1
    // computer winning
   else if(compInput == 'rock' && userInput == 'scissor') compScore+=1;
   else if(compInput == 'paper' && userInput == 'rock') compScore+=1
   else if(compInput == 'scissor' && userInput == 'paper') compScore+=1

   document.querySelector('#userScoreVal').innerText = userScore;
   document.querySelector('#compScoreVal').innerText = compScore;
}


