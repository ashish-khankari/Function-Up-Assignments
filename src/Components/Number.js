import { useState } from "react"
import './Number.css'
export default function Name() {
    const [message, setMessage] = useState();
    const [guess, setGuess] = useState();
    const [attempt, setAttempt] = useState(1);

    function guessNum(e) {
        setGuess(e.target.value);
    }


    function checkValue() {
        setAttempt(attempt + 1)

        if(!guess){
            alert("Please enter valid data")
        }
        if (guess == 67) {
            setMessage(`Hurray, You have Guessed the Magic Number in ${attempt} attempts`)
            setGuess("")
        } else if (guess < 40 && guess > 25) {
            alert("Value is low, guess again!!")
            setGuess("")
        } else if (guess <= 25 && guess > 0) {
            alert("Value is too low, guess again !!")
            setGuess("")
        } else if (guess < 67 && guess >= 40) {
            alert("Your are almost there, try again")
            setGuess("")
        } else if (guess > 67 && guess <= 85) {
            alert("Your are almost there, try again")
            setGuess("")
        } else if (guess >= 85 && guess <= 100) {
            alert("Value is too High, guess again !!")
            setGuess("")
        }

    }
    return (
        <div className="guessNumber">
            <h1 className="text">Guess the values from 0 - 100</h1>
            
            <input
                type="number"
                placeholder="Enter Your Name"
                onChange={guessNum}
                value={guess}
                className="input-field"
            />

            <button onClick={checkValue} className="btn">Guess</button>

            {/* <p>{`Congratulations You guesses the number in ${message} Attempts`}</p> */}
            <p className="result">{ message}</p>


        </div>

    )
}