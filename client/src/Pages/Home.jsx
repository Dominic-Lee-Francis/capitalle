import "./Home.css";
import { useState, useEffect } from "react";

const Home = ({ country, user }) => {
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

  // Feedback message for the user
  const [feedback, setFeedback] = useState("");

  // Description of capital city
  const descriptionDB = country.description;
  const [description, setDescription] = useState("");

  // was user correct or not
  const [correct, setCorrect] = useState(false);
  console.log(correct);

  // update player streak if a user is logged in
  useEffect(() => {
    if (user) {
      if (correct) {
        fetch("http://localhost:8080/capital/updateStreak", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: user }),
        })
          .then((response) => {
            console.log(response);
            if (response.status === 200) return response.json();
            throw new Error("failed to update streak");
          })
          .then((resObject) => {
            console.log(resObject);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log("No user logged in");
    }
  }, [correct]);

  // check the answer in the form submission
  const checkAnswer = (e) => {
    e.preventDefault();
    // if the capital is correct, alert the user
    if (capital.toLowerCase() === answer.toLowerCase()) {
      // THIS CODE RESETS THE GAME AFTER A CORRECT GUESS. ONLY USED FOR TESTING.
      // TODO - RESET THE GAME EVERY 24 HOURS
      setFeedback(
        `Well done! The capital of ${country.name} is ${answer}! Try again tomorrow!`
      );
      setDescription(descriptionDB);
      setGuesses(0);
      setCorrect(true);
    } else {
      // if the capital is incorrect, decrement the guesses by 1
      setGuesses(guesses - 1);
      if (guesses === 6) {
        console.log("First guess");
        setCapital("");
      }
      if (guesses === 5) {
        console.log("Second guess");
        setCapital("");
      }
      if (guesses === 4) {
        console.log("Third guess");
        setCapital("");
      }
      if (guesses === 3) {
        console.log("Fourth guess");
        setCapital("");
      }
      if (guesses === 2) {
        console.log("Fifth guess");
        setCapital("");
      }
      if (guesses === 1) {
        // if the guesses reach 0, alert the user with the correct answer
        setFeedback(
          `Unlucky! The capital of ${country.name} is '${answer}'! Try again tomorrow!`
        );
        setCapital("");
        setDescription(descriptionDB);
        setCorrect(false);
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
      <h3 className="guessesRemaining">
        Guesses remaining: <span className="guessesRed">{guesses}</span>
      </h3>
      {feedback && <h3>{feedback}</h3>}
      {description && <p>{description}</p>}
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
