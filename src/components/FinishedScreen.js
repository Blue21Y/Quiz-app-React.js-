function FinishedScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">
        your highest score is <strong>{highScore}</strong>
      </p>
    </>
  );
}

export default FinishedScreen;
