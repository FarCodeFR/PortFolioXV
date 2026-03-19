import { useEffect, useRef } from "react";
import styles from "./Contact.module.scss";
import type { ContactProps } from "../../../types/contact.t";
import gsap from "gsap";

function Contact({ setOpenContact, openContact }: ContactProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(openContact, setOpenContact);

  useEffect(() => {
    const panel = containerRef.current;
    if (!panel) {
      return;
    } else if (openContact === true) {
      panel.classList.add(styles.visible);
      // panel.timeline;
    }
  }, [openContact]);

  return (
    <div ref={containerRef} className={`${styles.container_contact}`}>
      <button type="button" onClick={() => setOpenContact(false)}>
        Closed
      </button>
      <h1>Test</h1>
    </div>
  );
}

export default Contact;
