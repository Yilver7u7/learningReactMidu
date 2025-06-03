import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' :''}`
  
  const handleBoard = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleBoard} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] =turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
  }

  return (
    <>
    <main className='board'>
      <h1>TIC TOC TOE</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <div className='cell' key={index}>
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              </div>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>


    </main>
    </>
  )
}

export default App
