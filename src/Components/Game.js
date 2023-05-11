import React, { useState } from 'react';
import './Game.css';

export default function Game() {
    const [data, setData] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();

    function checkForWinner(squares) {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {
                    // Do nothing
                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    }

    function checkForDraw() {
        if (cells.every((cell) => cell !== '') && !winner) {
            return true;
        }
        return false;
    }

    function handleClick(num) {
        if (winner || checkForDraw()) {
            return;
        }

        const squares = [...cells];
        console.log(squares)
        if (squares[num] === '') {
            if (data === 'X') {
                squares[num] = 'X';
                setData('O');
            } else {
                squares[num] = 'O';
                setData('X');
            }
            checkForWinner(squares);
            setCells(squares);
        }
    }

    function handleReset() {
        setWinner(null);
        setCells(Array(9).fill(''));
    }

    function Cell({ num }) {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    }

    return (
        <div className='tic-tac-toe'>
            Player: {data}
            <table className='game-display'>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>

            {winner && (
                <>
                    <p>{winner} is the winner</p>
                    <button onClick={handleReset}>Play Again</button>
                </>
            )}

            {!winner && checkForDraw() && (
                <>
                    <p>Game Drawn</p>
                    <button onClick={handleReset}>Play Again</button>
                </>
            )}
        </div>
    );
}
