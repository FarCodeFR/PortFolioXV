import data from "../../../data/logo.json";
import styles from "./CarousselLogo.module.scss";

function CarouselLogo() {
  const logos = [...data]; // duplication

  return logos.map((el, index) => (
    <picture
      data-logo-item
      className={styles.containerLogo}
      key={`${el.id}-${index}`}
    >
      <img src={el.image} alt="" />
    </picture>
  ));
}
export default CarouselLogo;
