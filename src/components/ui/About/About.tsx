import { useRef } from "react";
import styles from "./About.module.scss";
import gsap from "gsap";
import CarouselLogo from "./CarouselLogo";
import Experience from "./Experience";
import type { AboutProps } from "../../../types/about.t";
import Hobby from "./Hobby";
import Reseau from "./Reseau";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

function About({ open, setOpen }: AboutProps) {
  // Gestion ouverture fermeture du panel
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Gestion d'apparition des éléments du panel
  const titleHeroAboutRef = useRef<HTMLHeadingElement>(null);
  const bioHeroAboutRef = useRef<HTMLElement>(null);

  // Container du panel about
  useGSAP(
    () => {
      const overlay = containerRef.current;
      const panel = panelRef.current;
      const title = titleHeroAboutRef.current;
      const bio = bioHeroAboutRef.current;
      const logo = trackRef.current?.querySelectorAll("[data-logo-item]");
      const track = trackRef.current;

      if (
        !overlay ||
        !panel ||
        !title ||
        !bio ||
        !logo?.length ||
        !trackRef.current ||
        !track
      )
        return;

      // Animation Text
      const splitTitle = new SplitText(title, { type: "chars" });
      const splitBio = new SplitText(bio, { type: "lines" });

      // Caroussel
      let carouselTween: gsap.core.Tween | null = null;
      const handleEnterCaroussel = () => {
        carouselTween?.timeScale(0.5);
      };
      const handleLeaveCaroussel = () => {
        carouselTween?.timeScale(1);
      };
      track.addEventListener("mouseenter", handleEnterCaroussel);
      track.addEventListener("mouseleave", handleLeaveCaroussel);

      gsap.killTweensOf([
        overlay,
        panel,
        splitTitle.chars,
        splitBio.lines,
        bio,
        logo,
        trackRef.current,
      ]);

      if (open) {
        overlay.classList.add(styles.visible);

        const tl = gsap.timeline();

        tl.fromTo(
          panel,
          { x: "100%" },
          {
            x: "0%",
            duration: 1.5,
            ease: "power4.out",
          },
        )
          .from(
            splitTitle.chars,
            {
              y: "random(-50, 50)",
              opacity: 0,
              stagger: 0.02,
              duration: 0.6,
            },
            "-=0.35",
          )
          .from(
            splitBio.lines,
            {
              y: 30,
              opacity: 0,
              stagger: 0.05,
            },
            "-=0.45",
          )
          .from(
            logo,
            {
              y: 40,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,

              ease: "elastic.out",
            },
            "-=0.2",
          )
          .add(() => {
            if (trackRef.current) {
              carouselTween = gsap.to(trackRef.current, {
                xPercent: -30,
                duration: 10,
                repeat: -1,
                ease: "none",
              });
            }
          });
      } else {
        gsap.to(panel, {
          x: "100%",
          duration: 0.5,
          ease: "expo.in",
          onComplete: () => {
            overlay.classList.remove(styles.visible);
          },
        });
      }
      return () => {
        splitTitle.revert();
        splitBio.revert();
        carouselTween?.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [open],
    },
  );

  return (
    <div ref={containerRef} className={styles.container_blure}>
      <div ref={panelRef} className={styles.container_about}>
        <button type="button" onClick={() => setOpen(false)}>
          Closed
        </button>
        <section className={styles.heros_about}>
          <h1 ref={titleHeroAboutRef}>
            Front-end
            <br /> Developer
          </h1>
          <article ref={bioHeroAboutRef}>
            <p className={styles.bio_title}>BIO</p>
            <p className={styles.bio_description}>
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
