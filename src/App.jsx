import React, { useState } from 'react';

const RockPaperScissors = () => {
  const options = ['rock', 'paper', 'scissors'];
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  const handleClick = (choice) => {
    if (round >= 3) return;

    const computer = options[Math.floor(Math.random() * options.length)];
    const gameResult = determineWinner(choice, computer);

    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);
    setRound(round + 1);

    if (gameResult === 'You win!') {
      setScore({ ...score, wins: score.wins + 1 });
    } else if (gameResult === 'You lose!') {
      setScore({ ...score, losses: score.losses + 1 });
    } else {
      setScore({ ...score, draws: score.draws + 1 });
    }
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return "It's a draw!";
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Rock Paper Scissors</h1>
      <p>Round: {round} / 3</p>
      <div>
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            style={{ margin: '10px', padding: '10px 20px' }}
            disabled={round >= 3}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <h2>Your choice: {userChoice}</h2>
      <h2>Computer's choice: {computerChoice}</h2>
      <h2>{result}</h2>

      {round >= 3 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Game Over</h2>
          <p>Wins: {score.wins}</p>
          <p>Losses: {score.losses}</p>
          <p>Draws: {score.draws}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;