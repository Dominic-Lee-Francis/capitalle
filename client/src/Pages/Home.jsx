const Home = () => {
  return (
    <div className="home">
      <h1 className="country">Barbados</h1>
      <img
        className="flag"
        src="https://worldometers.info/img/flags/bb-flag.gif"
        alt="Flag of Barbados"
      />
      <h2 className="instructions">
        Guess the capital. You have 6 guesses remaining.
      </h2>
      <input
        className="guess-input"
        type="text"
        placeholder="Enter your guess here"
      />
    </div>
  );
};

export default Home;
