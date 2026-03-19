import { useState } from "react";
import About from "../ui/About/About";
import Footer from "./Footer";
import Header from "./Header";
import type { PropsShell } from "../..//types/propsShell.t";
import Contact from "../ui/Contact/Contact";

function SiteShell({ children }: PropsShell) {
  // About
  const [open, setOpen] = useState<boolean>(false);
  // Contact
  const [openContact, setOpenContact] = useState<boolean>(false);
  return (
    <div className="page">
      <Header setOpen={setOpen} setOpenContact={setOpenContact} />
      {children}
      <Contact setOpenContact={setOpenContact} openContact={openContact} />
      <About setOpen={setOpen} open={open} />
      <Footer />
    </div>
  );
}

export default SiteShell;
