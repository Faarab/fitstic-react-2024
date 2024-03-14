
//interfaccia in linea 


import { Point } from "../lezione1";
import styles from './Display.module.scss';

export default function Display({
  n,
  mycolor = "blue",
}: {
  n: number;
  mycolor?: string;
  obj?: Point;
}) {
//   let [count, Setcount] = useState(0);

//   let handleButtonClick = () => {
//     Setcount((count) => count + 1);
//   };

//   let handleButtonClickMinus = () => {
//     Setcount((count) => count - 1);
//   };

  // const colorChoice = mycolor ?? "blue"
  return (
    <>
      {/* <div className={styles.display} style={{ color: mycolor }}>
        {n}
      </div> */}
       <div className={styles.display}>{n}</div>
      {/*<div className={styles.box}>
        <button className={styles.button} onClick={handleButtonClick}>
          +
        </button>
        <button className={styles.button} onClick={handleButtonClickMinus}>
          -
        </button>
      </div> */}
    </>
  );
}
