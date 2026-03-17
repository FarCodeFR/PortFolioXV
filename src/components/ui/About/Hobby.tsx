import { Fragment } from "react/jsx-runtime";
import styles from "./Hobby.module.scss";

function Hobby() {
  return (
    <Fragment>
      <div className={styles.hobby_about}>
        <h2>Hobby</h2>
        <p>Jeux vidéo, Cinéma, Voyager, Cuisiner, </p>
      </div>
    </Fragment>
  );
}

export default Hobby;
