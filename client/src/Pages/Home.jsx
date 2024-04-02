import "./Home.css";
import { useState, useEffect } from "react";

const Home = ({ country }) => {
  // get the capital from the country object in the database
  const answer = country.capital;
  // set the number of guesses to 6
  const [guesses, setGuesses] = useState(6);
  // use useEffect to stop the guess counter going any lower if they continue to guess after 0 guesses
  useEffect(() => {
    if (guesses < 0) {
      setGuesses(0);
    }
  }, [guesses]);
  // set the capital to the answer from the database
  const [capital, setCapital] = useState("");

  // check the answer in the form submission
  const checkAnswer = (e) => {
    e.preventDefault();
    // if the capital is correct, alert the user
    if (capital.toLowerCase() === answer.toLowerCase()) {
      alert("Correct!");
      // THIS CODE RESETS THE GAME AFTER A CORRECT GUESS. ONLY USED FOR TESTING.
      // TODO - RESET THE GAME EVERY 24 HOURS
      // setGuesses(6);
      // setCapital("");
    } else {
      // if the capital is incorrect, decrement the guesses by 1
      setGuesses(guesses - 1);
      if (guesses === 6) {
        console.log("First guess");
      }
      if (guesses === 5) {
        console.log("Second guess");
      }
      if (guesses === 4) {
        console.log("Third guess");
      }
      if (guesses === 3) {
        console.log("Fourth guess");
      }
      if (guesses === 2) {
        console.log("Fifth guess");
      }
      if (guesses === 1) {
        // if the guesses reach 0, alert the user with the correct answer
        alert(`The correct answer was ${answer}`);
        // THIS CODE RESETS THE GAME AFTER A CORRECT GUESS. ONLY USED FOR TESTING.
        // TODO - RESET THE GAME EVERY 24 HOURS
        // setGuesses(6);
        // setCapital("");
      }
    }
  };

  return (
    <div className="home">
      <h1 className="homeTitle">Guess the Capital</h1>
      {country && <h1 className="countryName">{country.name}</h1>}
      <img className="flag" src={country.flag} alt="Todays flag" />
      <h3 className="guessesRemaining">Guesses remaining: {guesses}</h3>
      <form className="guessForm" onSubmit={checkAnswer}>
        <input
          className="guessInput"
          type="text"
          placeholder="Enter the name of the Capital here"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </form>
      {guesses < 6 && (
        <table class="table">
          <thead>
            <tr>
              <th>Hints</th>
            </tr>
          </thead>
          <tbody>
            {guesses <= 5 && <tr>{country && <td>{country.hint1}</td>}</tr>}
            {guesses <= 4 && <tr>{country && <td>{country.hint2}</td>}</tr>}
            {guesses <= 3 && <tr>{country && <td>{country.hint3}</td>}</tr>}
            {guesses <= 2 && <tr>{country && <td>{country.hint4}</td>}</tr>}
            {guesses <= 1 && <tr>{country && <td>{country.hint5}</td>}</tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
