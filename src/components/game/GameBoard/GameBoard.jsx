import Button from "../../common/Button/Button";
import styles from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div className={styles.container}>
      GameBoard
      <Button mStyles="test" gStyles="test" content="Test button" />
    </div>
  );
};

export default GameBoard;
