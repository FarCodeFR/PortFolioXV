"use client";
import { useState } from "react";
import About from "../ui/About/About";
import Footer from "./Footer";
import Header from "./Header";
import type { PropsShell } from "../..//types/propsShell.t";

function SiteShell({ children }: PropsShell) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="page">
      <Header setOpen={setOpen} />
      {children}
      <About setOpen={setOpen} open={open} />
      <Footer />
    </div>
  );
}

export default SiteShell;
