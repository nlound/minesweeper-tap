import { useState } from "react";
import "./Cell.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";

const Cell = (props: {
  number: number;
  handleCellClicked: any;
  gameStatus: boolean;
}) => {
  const [cellLeftClicked, setLeftCellClicked] = useState<boolean>(false);
  const [cellRightClicked, setRightCellClicked] = useState<boolean>(false);

  const leftClicAction = () => {
    if (!cellRightClicked) {
      setLeftCellClicked(true);
      props.handleCellClicked(props.number);
    }
  };

  const rightClicAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!cellLeftClicked) {
      !cellRightClicked
        ? setRightCellClicked(true)
        : setRightCellClicked(false);
    }
  };

  return (
    <>
      <button
        className={`cell empty-${props.number} ${
          cellLeftClicked || !props.gameStatus ? " pressed" : ""
        } ${cellRightClicked ? " disabled" : ""} ${
          cellRightClicked ? " flag" : ""
        }`}
        onContextMenu={(e) => rightClicAction(e)}
        onClick={() => leftClicAction()}
      >
        {cellRightClicked ? (
          <FontAwesomeIcon icon={faFlag} />
        ) : (
          cellLeftClicked &&
          (props.number === 9 ? (
            <FontAwesomeIcon icon={faBomb} />
          ) : (
            props.number
          ))
        )}
      </button>
    </>
  );
};

export default Cell;
