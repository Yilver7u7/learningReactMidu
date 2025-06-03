import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

// eslint-disable-next-line react/prop-types
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

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)


  const checkWinner = ( boardToCheck ) => {
    //Revisamos si alguna de las combinaciones actuales detemina un ganador
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if (
        boardToCheck[a] && //Primero revisamos que valor tiene el primer cuadro
        boardToCheck[a] === boardToCheck[b] && //Luego si tiene el mismo valor las otras posiciones al primero
        boardToCheck[a] === boardToCheck[c] 
      ){
        return boardToCheck[a]
      }
    }
    //Si no hay ganador hasta que se vuelva dar click en no se revisaran
    //de y hasta que encuentre un ganador o se acaben los turnos no se detiene
    return null
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
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
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
