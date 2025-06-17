import { WINNER_COMBOS } from "../contants/contants"

export const checkWinner = ( boardToCheck ) => {
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

export const checkEndGame = (newBoard) => {
  //Revisamos si todas las posiciones del square estan vacias
  //Si todas estan ocupadas devuelve true
  return newBoard.every((square) => square !== null)
}  