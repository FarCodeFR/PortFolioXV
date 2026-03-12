import type { OpenType } from "../../types/header.t";
import styles from "./Header.module.scss";

function Header({ setOpen }: OpenType) {
  const handleClick = () => {
    setOpen((active) => !active);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <div className={styles.name}>
          <p>Timothe Renard</p>
          <p>NO AVAILABLE</p>
        </div>
        <ul className={styles.links}>
          <li>Contact</li>
          <li onClick={handleClick}>About</li>
        </ul>
      </nav>
      <div className={styles.zone}>
        <p>09:50</p>
        <p>NANTES, FR</p>
      </div>
    </header>
  );
}
export default Header;
