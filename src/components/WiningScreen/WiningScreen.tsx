import "./WiningScreen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
const WiningScreen = () => {
  const winningBombs = 50;

  return (
    <>
        <div className="winning-screen">
        You won!
        {[...Array(winningBombs)].map((_e, k) => (
          <FontAwesomeIcon icon={faBomb} key={k} className={`winning-screen--bombs bombs-${k}`}/>
          ))}
      </div>
    </>
  );
};

export default WiningScreen;
