import './App.css'
import { TURNS } from './contants/contants'
import { useState } from 'react'
import {Square} from './components/Square'
import confetti from 'canvas-confetti'
import {checkWinner as checkWinnerForm} from './logic/logic'
import { checkEndGame } from './logic/logic'
import { WinnerModal } from './components/WinnerModal'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //No actualiza si ya fue usada
    if( board[index] || winner ) return

    //Actualizamos el estado del square mediante su indice y de estar vacui escribimos sobre el
    const newBoard = [...board]
    newBoard[index] =turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    //Deteminamos al GANADOR
    const newWinner = checkWinnerForm(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <>
    <main className='board'>
      <h1>TIC TOC TOE</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <div className='cell' key={index}>
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {square}
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
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
    </>
  )
}

export default App
