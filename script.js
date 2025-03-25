// Get random choice for computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Determine the winner
  function determineWinner(player, computer) {
    if (player === computer) {
      return "It's a tie! 🤝";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return `🎉 You Win! ${capitalize(player)} beats ${capitalize(computer)}!`;
    } else {
      return `😢 You Lose! ${capitalize(computer)} beats ${capitalize(player)}!`;
    }
  }
  
  // Capitalize first letter for display
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  // Main function to play the game
  function playGame(playerChoice) {
    let computerChoice = getComputerChoice(); // Get random computer choice
    let resultMessage = determineWinner(playerChoice, computerChoice); // Get winner
    document.getElementById("result").innerHTML = `
      You chose: ${capitalize(playerChoice)} <br>
      Computer chose: ${capitalize(computerChoice)} <br><br>
      <strong>${resultMessage}</strong>
    `;
  }
  