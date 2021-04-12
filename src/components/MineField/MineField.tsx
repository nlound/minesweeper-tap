import "./MineField.scss";
import Header from "../Header/Header";
import Cell from "../Cell/Cell";
import { useState } from "react";

const MineField = (props: { mineFieldData: number[][]; settings: any }) => {
  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const handleCellClicked = (valor: number) => {
    if (valor === 9) {
      setGameStatus(false);
    }
  };

  return (
    <>
      <div className="mine-field">
        <Header
          totalBombs={props.settings.bombs}
          gameStatus={gameStatus}
        ></Header>
        <div className="mine-field--container">
          <div className="mine-field--row">
            {[...Array(props.settings.height)].map((_e, row) => {
              return (
                <div className="mine-field--column" key={row}>
                  {[...Array(props.settings.width)].map((_e, col) => (
                    <Cell
                      number={props.mineFieldData[row][col]}
                      key={col}
                      handleCellClicked={handleCellClicked}
                      gameStatus={gameStatus}
                    ></Cell>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MineField;
