"use client";

import { useEffect, useRef, useState } from "react";

export default function ResultsCounters() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  // Counter states
  const [proj, setProj] = useState(0);
  const [roas, setRoas] = useState(0);
  const [conv, setConv] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            triggerCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const triggerCounters = () => {
    if (triggered) return;
    setTriggered(true);

    const animateVal = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>
    ) => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, stepTime);
    };

    animateVal(35, setProj);
    animateVal(20, setRoas);
    animateVal(50, setConv);
    animateVal(3, setYears);
  };

  return (
    <section ref={sectionRef} id="resultados" className={`reveal ${isVisible ? "active" : ""}`}>
      <div className="container">
        <div className="counter-grid">
          <div className="premium-card" style={{ textAlign: "center", border: "none", background: "transparent", padding: "1rem" }}>
            <div className="counter-val">{proj}+</div>
            <div className="counter-label">Projetos Web</div>
          </div>
          <div className="premium-card" style={{ textAlign: "center", border: "none", background: "transparent", padding: "1rem" }}>
            <div className="counter-val">{roas}x</div>
            <div className="counter-label">ROAS Máximo</div>
          </div>
          <div className="premium-card" style={{ textAlign: "center", border: "none", background: "transparent", padding: "1rem" }}>
            <div className="counter-val">+{conv}%</div>
            <div className="counter-label">Aumento em Conversão</div>
          </div>
          <div className="premium-card" style={{ textAlign: "center", border: "none", background: "transparent", padding: "1rem" }}>
            <div className="counter-val">{years}+</div>
            <div className="counter-label">Anos Exp. Híbrida</div>
          </div>
        </div>
      </div>
    </section>
  );
}
