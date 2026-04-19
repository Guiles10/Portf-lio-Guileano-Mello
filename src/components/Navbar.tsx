"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        background: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.8)",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="#" className="nav-logo">
          GGM
        </Link>
        <div className="nav-links">
          <Link href="#sobre">// SOBRE</Link>
          <Link href="#expertise">// STATUS</Link>
          <Link href="#projetos">// CASES</Link>
          <Link href="#stack">// STACK</Link>
          <Link href="#formacao">// FORMAÇÃO</Link>
          <Link href="#contato">// CONTATO</Link>
        </div>
      </div>
    </nav>
  );
}
