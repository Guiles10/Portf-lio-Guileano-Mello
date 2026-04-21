"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return <div style={{ width: 40, height: 40 }} />; // Prevents hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switch ${theme}`}
      aria-label="Alternar Tema"
      style={{
        position: 'relative',
        width: '56px',
        height: '28px',
        borderRadius: '30px',
        background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        border: '2px solid var(--primary)', /* Contorno mais visível */
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        marginLeft: '1.5rem',
        boxShadow: '0 0 10px var(--primary-glow)',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          left: theme === 'dark' ? '2px' : '28px',
          width: '22px',
          height: '22px',
          background: theme === 'dark' ? '#0F172A' : '#FFF',
          borderRadius: '50%',
          transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        {theme === 'dark' ? <Moon size={14} color="#FFF" /> : <Sun size={14} color="#10B981" />}
      </div>
    </button>
  );
}
