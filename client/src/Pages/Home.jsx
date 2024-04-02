import Hint from "../Components/Hint";

const Home = ({ country }) => {
  return (
    <div className="home">
      <h1>Guess the Capital</h1>
      {country && <h1>{country.name}</h1>}
      <img className="flag" src={country.flag} alt="Todays flag" />
      <h2 className="instructions">
        Guess the capital. You have 6 guesses remaining.
      </h2>
      <input
        className="guess-input"
        type="text"
        placeholder="Enter your guess here"
      />
      <Hint country={country} />
    </div>
  );
};

export default Home;
