function RestartQuiz({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz 😊
      </button>
    </div>
  );
}

export default RestartQuiz;
