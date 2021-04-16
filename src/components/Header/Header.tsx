import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDizzy, faSmile } from "@fortawesome/free-solid-svg-icons";

const Header = (props: { totalBombs: number; gameStatus: boolean }) => {
  return (
    <div className="header">
      <div className="header--info">{props.totalBombs}</div>
      <div className="header--status-game">
        {props.gameStatus ? (
          <FontAwesomeIcon icon={faSmile} />
        ) : (
          <FontAwesomeIcon icon={faDizzy} />
        )}
      </div>
    </div>
  );
};

export default Header;
