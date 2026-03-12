import styles from "./ProjectGrid.module.scss";
import { useState } from "react";
import gsap from "gsap";

const projects = [
  { id: 1, title: "Weather App", image: "/images/projects/waiting.svg" },
  { id: 2, title: "Mazinger", image: "/images/projects/waiting.svg" },
  { id: 3, title: "Casse croute", image: "/images/projects/waiting.svg" },
];

function ProjectGrid() {
  const [isActive, setIsActive] = useState<number | null>(null);

  const animateTitle = (el: HTMLLIElement, state: "enter" | "leave") => {
    const title = el.querySelector("h2");
    if (!title) return;

    gsap.killTweensOf(title);

    if (state === "enter") {
      gsap.to(title, {
        y: el.clientHeight - 100,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(0.8,0.3)",
      });
    } else {
      gsap.to(title, {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleEnter = (id: number, el: HTMLLIElement) => {
    setIsActive(id);
    animateTitle(el, "enter");
  };

  const handleLeave = (el: HTMLLIElement) => {
    animateTitle(el, "leave");
    setIsActive(null);
  };

  return (
    <section className={styles.projectGrid}>
      <h1 className={styles.t_home}>Projects</h1>
      <ul className={styles.listProject}>
        {projects.map((el) => (
          <li
            key={el.id}
            onMouseEnter={(e) => handleEnter(el.id, e.currentTarget)}
            onMouseLeave={(e) => handleLeave(e.currentTarget)}
            className={[
              styles.projectCards,
              isActive === el.id && styles.activeCard,
              isActive !== null && isActive !== el.id && styles.inactiveCard,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h2>{el.title}</h2>
            <img src={el.image} alt="img" loading="eager" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectGrid;
