"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import NavbarComponent from "./components/ui/Navbar";
export default function Home() {
  useEffect(() => {
    gsap.to("h1", { rotation: 360, duration: 2 });
  }, []);

  return (
    <div>
      <NavbarComponent />
      
    </div>
  );
}