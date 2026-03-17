import { useEffect, useRef } from "react";
import styles from "./About.module.scss";
import gsap from "gsap";
import CarouselLogo from "./CarouselLogo";
import Experience from "./Experience";
import type { AboutProps } from "../../../types/about.t";
import Hobby from "./Hobby";
import Reseau from "./Reseau";

function About({ open, setOpen }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = containerRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    gsap.killTweensOf(panel);

    if (open) {
      gsap.set(trackRef.current, { x: 0, clearProps: "transform" });

      overlay.classList.add(styles.visible);

      gsap.fromTo(
        panel,
        { x: "100%" },
        { x: "0%", duration: 1.5, ease: "power4.out" },
      );
    } else {
      gsap.to(panel, {
        x: "100%",
        duration: 0.5,
        ease: "expo.in",
        onComplete: () => overlay.classList.remove(styles.visible),
      });
    }
  }, [open]);

  useEffect(() => {
    const track = trackRef.current;

    const tween = gsap.to(track, {
      xPercent: -30,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container_blure}>
      <div ref={panelRef} className={styles.container_about}>
        <button type="button" onClick={() => setOpen(false)}>
          Closed
        </button>
        <section className={styles.heros_about}>
          <h1>
            Front-end
            <br /> Developer
          </h1>
          <article>
            <p>BIO</p>
            <p>
              Passionné par l’informatique depuis mon plus jeune âge, j’ai
              récemment suivi une formation intensive de 5 mois (équivalent Bac
              +2) en développement web Full Stack. <br />
              <br />
              Cette expérience a été une véritable révélation : j’y ai découvert
              mon attrait pour la création, l’exploration de nouvelles approches
              de développement et l’apprentissage continu de nouvelles
              technologies. <br />
              <br />
              Après l’obtention de ma certification, j’ai souhaité poursuivre
              mon évolution et approfondir mes compétences. <br />
              <br /> J’ai ainsi intégré un Mastère Lead Développeur Front-End à
              l’ECV nantes, pour une durée de deux ans en alternance. <br />
              <br /> Actuellement en alternance, je travaille principalement
              avec WordPress, ce qui me permet de renforcer mes compétences en
              développement front-end, en intégration et en conception
              d’interfaces orientées utilisateur.
            </p>
          </article>
        </section>
        <section className={styles.logo_about}>
          <div ref={trackRef} className={styles.logo_track}>
            <CarouselLogo />
          </div>
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <Hobby />
        </section>
        <section>
          <Reseau />
        </section>
      </div>
    </div>
  );
}
export default About;
