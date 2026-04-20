"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    { href: "#sobre", label: "// SOBRE" },
    { href: "#expertise", label: "// STATUS" },
    { href: "#projetos", label: "// CASES" },
    { href: "#stack", label: "// STACK" },
    { href: "#formacao", label: "// FORMAÇÃO" },
    { href: "#contato", label: "// CONTATO" },
  ];

  return (
    <>
      <nav
        id="navbar"
        className={scrolled ? "scrolled" : ""}
        style={{
          background: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
          transition: "all 0.3s ease",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 2000,
          padding: scrolled ? "1rem 0" : "2rem 0",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="#" className="nav-logo" onClick={closeMenu}>
            GGM
          </Link>
          
          {/* Desktop Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <button 
            className={`hamburger ${isOpen ? "open" : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className="mobile-link" 
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
