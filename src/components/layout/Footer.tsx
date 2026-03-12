import styles from "./Footer.module.scss";
import ViewToggle from "../ui/ViewToggle";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ViewToggle />
    </footer>
  );
}

export default Footer;
