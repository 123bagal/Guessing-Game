const max=prompt("Enter the Max Number:");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the Number:");
while(true)
{
    if(guess=="quit")
    {
        console.log("user quit");
    }
    if(guess==random)
    {
        console.log("You are right!Congrats");
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Your Guess was too small try again:")
    
    }
    else
    {
       guess=prompt("Your Guess was too large try again:")
    }
}