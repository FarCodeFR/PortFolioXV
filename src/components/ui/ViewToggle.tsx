"use client";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./ViewToggle.module.scss";
import { gsap } from "gsap";

function ViewToggle() {
  const [isSwitch, setIsSwitch] = useState("full");
  const thumbRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!thumbRef.current) {
      console.log("Erreur useRef");
      return;
    }
    gsap.to(thumbRef.current, {
      duration: 0.8,
      ease: "power4.out",
      x: isSwitch === "full" ? "100%" : "0%",
    });
  }, [isSwitch]);

  return (
    <div className={styles.toggle} role="group" aria-label="View mode">
      <button
        type="button"
        aria-pressed={isSwitch === "one"}
        onClick={() => setIsSwitch("one")}
        className={isSwitch === "one" ? styles.isActive : ""}
      >
        ONE
      </button>
      <button
        type="button"
        aria-pressed={isSwitch === "full"}
        onClick={() => setIsSwitch("full")}
        className={isSwitch === "full" ? styles.isActive : ""}
      >
        FULL
      </button>
      <span ref={thumbRef} />
    </div>
  );
}
export default ViewToggle;
