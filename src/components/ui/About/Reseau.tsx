import styles from "./Reseau.module.scss";

function Reseau() {
  return (
    <ul className={styles.reseau_about}>
      <li>
        Linkedin <img src="public/images/decos/reseau.svg" />
        <span />
      </li>
      <li>
        GitHub <img src="public/images/decos/reseau.svg" />
        <span />
      </li>
      <li>
        Timothernd@gmail.com <img src="public/images/decos/reseau.svg" />
        <span />
      </li>
    </ul>
  );
}

export default Reseau;
