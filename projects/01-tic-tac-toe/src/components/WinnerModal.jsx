/* Este es el modal que indica quien fue el ganador */
import { Square } from "./Square"

// eslint-disable-next-line react/prop-types
export function WinnerModal({winner, resetGame}){
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó'

    return (
          <section className='winner'>
            <div className='text'>
              <h2>
                {winnerText}
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
}