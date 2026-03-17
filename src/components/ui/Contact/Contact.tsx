import { useRef } from "react";
import styles from "./Contact.module.scss";
import type { ContactProps } from "../../../types/contact.t";

function Contact({ setOpenContact, openContact }: ContactProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`${styles.container_contact} ${
        openContact ? styles.visible : ""
      }`}
    >
      <button type="button" onClick={() => setOpenContact(false)}>
        Closed
      </button>
      <h1>Test</h1>
    </div>
  );
}

export default Contact;
