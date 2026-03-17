import { Fragment } from "react/jsx-runtime";
import styles from "./Hobby.module.scss";

function Hobby() {
  return (
    <Fragment>
      <div className={styles.hobby_about}>
        <h2>Hobby</h2>
        <ul>
          <li>Voyager</li>
          <li>Randonnée</li>
          <li>Jeux vidéo</li>
          <li>Informatique</li>
          <li>Restaurant</li>
          <li>Cinéma</li>
          <li>Pompier volontaire</li>
          <li>Cuisiner</li>
        </ul>
        <img src="public/images/decos/mountain.svg" alt="" />
      </div>
    </Fragment>
  );
}

export default Hobby;
