let playerName = prompt("Hello, What is your name?")
let game = 0 //number of games played to start at 0
let score = 0

while   (confirm("Are you ready to play?") === true)    {
    game++ //everytime the loop is run adds 1 to game
    function getWinner(player1, player2) {
        if (
            player1 === "scissors" && player2 === "paper" || 
            player1 === "paper" && player2 === "rock" || 
            player1 === "rock" && player2 === "scissors")  {
                score++
                alert(playerName + " you won!!! " + "Your score is " + score + " on round " + game)
            }
        else if (
            player2 === "scissors" && player1 === "paper" || 
            player2 === "paper" && player1 === "rock" || 
            player2 === "rock" && player1 === "scissors")  {
                score--
                alert(playerName+ " you lost that game " + "Your score is " + score + " on round " + game)
            } else{
                alert(playerName + " that was a draw " + "Your score is " + score + " on round " + game)
            }
    }
    
    
    
    const  move = ["rock", "paper", "scissors"] //created a variable to hold an array of computer moves
    //created a variable to randomly pick a value from the move array
    let moves = move[Math.floor(Math.random()*move.length)]; //randomly picks a key to give the value
    console.log("computer move was", moves) //prints the  value of the computer move
    
    /*
    Math.floor: rounds a number down to the nearest interger
    Math.random: returns a random number >= 0 and <1, therefore Math.random 
    */
    
    
    let result = getWinner(prompt("Input your move"), moves);
}

// confirm () displays a box with an ok when the result is true and cancel when the result is false 




//show number of wins, loses and draws
//after each round display no of rounds and current score

