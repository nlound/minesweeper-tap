import "./MineField.scss";
import Header from "../Header/Header";
import Cell from "../Cell/Cell";
import React, { useState } from "react";
import { MineFieldSettings } from "../../interfaces";
import WiningScreen from "../WiningScreen/WiningScreen";

const MineField = (props: {
  mineFieldData: number[][];
  settings: MineFieldSettings;
}) => {
  const [gameStatus, setGameStatus] = useState<boolean>(true);
  const [emptyCells, setEmptyCells] = useState<number>(
    props.settings.height * props.settings.width - props.settings.bombs
  );
  const handleCellClicked = (valor: number) => {
    if (valor === 9) {
      setGameStatus(false);
    }else{
      setEmptyCells(emptyCells - 1);
    }
  };

  return (
    <>
      <div className="mine-field">
        <Header
          totalBombs={props.settings.bombs}
          gameStatus={gameStatus}
        ></Header>

        {emptyCells === 0 ? (
          <WiningScreen></WiningScreen>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default MineField;
