import React, { useEffect, useState } from 'react'
import './style.css'
const empty = '-'
const TicTacTow = () => {
    const [player, switchPlayer] = useState(1)
    const [board, setBoard] = useState(Array.from({ length: 3 }, () => Array(3).fill(empty)))
    const [winner, setWinner] = useState(0)
    useEffect(() => {
    }, [])
    useEffect(() => {
        checkWin()
    }, [player])
    useEffect(() => {
        if (winner !== 0)
            alert(`winner is ${winner === 1 ? 'X' : 'O'}`)
    }, [winner])
    const checkWin = () => {
        const X = checkPlayer(1), O = checkPlayer(-1)
        console.log(`X:${X}, O:${O}`)
        if (X !== O) {
            X ? setWinner(1) : setWinner(-1)
            return true
        }
        else
            return false

    }
    const checkPlayer = (player) => {
        let axis = 0, reverse = 0, value = player === 1 ? 'X' : 'O';

        // Loop over rows and columns to check for a win
        for (let i = 0; i < 3; i++) {
            let rowCount = 0;
            let colCount = 0;

            for (let j = 0; j < 3; j++) {
                if (board[i][j] === value) rowCount++;  // Check the row
                if (board[j][i] === value) colCount++;  // Check the column
            }

            // If we find a full row or column, return true
            if (rowCount === 3 || colCount === 3) {
                return true;
            }

            // Check diagonals
            if (board[i][i] === value) axis++;
            if (board[i][2 - i] === value) reverse++;
        }

        // Check for diagonal wins
        if (axis === 3 || reverse === 3) {
            return true;
        }

        // If no win found
        return false;
    }

    const mark = (i, j) => {
        const value = player === 1 ? 'X' : 'O'
        board[i][j] = value
        setBoard(board)
        switchPlayer(player * -1);
    }
    const click = (index) => {
        const [i, j] = getPlacment(index)
        if (winner !== 0)
            return

        console.log(i, j, board[i][j])
        if (board[i][j] === empty) {
            mark(i, j)
        }



    }
    const reset = () => {
        setBoard(Array.from({ length: 3 }, () => Array(3).fill(empty)))
        switchPlayer(1)
        setWinner(0)

    }
    const getPlacment = (index) => {
        return [Math.floor(index / 3), index % 3]
    }

    return (<div>
        <h1>Wellcome to TicTacTow</h1>
        <div className='game_board'>
            {
                board.flat().map((value, index) => {
                    return (<div key={index} className={`box ${value}`} onClick={() => {
                        click(index)
                    }}>
                        {value}
                    </div>)
                })}
        </div>
        <button onClick={() => reset()}>Reset</button>
    </div>
    )
}

export default TicTacTow