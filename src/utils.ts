import { MineFieldSettings } from "./interfaces";

/**
 * Returns a number in a given range without decimals
 * @params
 *  min: (number) minimum value to return
 *  max: (number) maximum value to return
 * @returns number
 */
const getRandomInteger = (min: number, max: number) =>
  Math.trunc(Math.random() * (max - min)) + min;

/**
 * Checks if a position has already a bomb to avoid duplicates
 * @params
 *  bombs: (number[][]) all bomb positions
 *  position: (number[]) position to check if available
 * @returns boolean
 */
const bombPositionAvailable = (
  bombs: number[][],
  position: number[]
): boolean => {
  if (bombs.length === 0) {
    // Arrays of bombs is empty
    return true;
  } else {
    for (let i = 0; i < bombs.length; i++) {
      if (JSON.stringify(bombs[i]) === JSON.stringify(position)) {
        return false;
      }
    }
    // no item is found
    return true;
  }
};

/**
 * given an empty field populates with bombs
 * @params
 *  field: (number[][]) board multidimensional array
 *  position: (MineFieldSettings) board height, weight and bombs to place.
 * @returns (number[][])
 */
const setBombsPositions = (field: number[][], props: MineFieldSettings) => {
  const bombs: number[][] = [];
  do {
    const newPosition = [
      getRandomInteger(0, props.height),
      getRandomInteger(0, props.width),
    ];
    const isValid = bombPositionAvailable(bombs, newPosition);
    if (isValid) {
      bombs.push(newPosition);
    }
  } while (bombs.length < props.bombs);
  for (let i = 0; i < bombs.length; i++) {
    field[bombs[i][0]][bombs[i][1]] = 9;
  }

  ;
  return setNeighboursInfo(field);
};

/**
 * Completes how many bombs around a cell has.
 * @params
 *  field: (number[][]) board dimentions and bombs to place.
 * @returns (number[][])
 */
const setNeighboursInfo = (field: number[][]) => {
  const board = field;
  const rowLimit = board.length-1;
  const columnLimit = board[0].length-1;
  board.forEach( (row, i) => {
    row.forEach( (col, j) => {
      // if not a bomb then skips the cell
      if (board[i][j] !== 9){
        let counter = 0;
        for(let x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
          for(let y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
            if(x !== i || y !== j) {
              // check if it's a bomb (9)
              if (board[x][y] === 9 ){
                counter++;
              } 
            }
          }
        }
        field[i][j] = counter;
      }
    })
  })
  return board;
}


/**
 * Creates the gameboard and populates it
 * @params
 *  props: (MineFieldSettings) board dimentions and bombs to place.
 * @returns number[][]
 */
export const createField = (props: MineFieldSettings) => {
  let field = new Array(props.height).fill(0, 0);
  field = field.map(() => new Array(props.width).fill(0, 0));
  return setBombsPositions(field, props);
};
