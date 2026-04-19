import Image from "next/image";
import Reveal from "./Reveal";

export default function Orbit() {
  return (
    <Reveal>
      <section id="orbit">
        <div className="orbit-container">
          {/* Catalyst Core - Reactor Engine */}
          <div className="pulse-wave pulse-1" />
          <div className="pulse-wave pulse-2" />
          <div className="pulse-wave pulse-3" />
          
          <div className="orbit-center">GGM</div>

          {/* Performance Keywords */}
          <div className="orbit-keyword keyword-1">Scalability</div>
          <div className="orbit-keyword keyword-2">Conversion</div>

          {/* SVG Synergy Connections */}
          <svg className="synergy-svg" viewBox="0 0 500 500">
            {/* Logic: React -> Next.js -> TypeScript */}
            <path d="M250,130 C250,100 370,100 370,130" fill="none" className="synergy-line" />
            <path d="M130,250 C100,250 100,370 130,370" fill="none" className="synergy-line" />
            <path d="M370,370 C400,370 400,250 370,250" fill="none" className="synergy-line" />
            {/* Logic: Ads -> Performance */}
            <path d="M250,50 L250,110" fill="none" className="synergy-line" />
          </svg>

          {/* Ring 1 (Inner) - Frameworks */}
          <div className="ring ring-1">
            <div className="planet p-1" data-tooltip="React">
              <img src="https://cdn.simpleicons.org/react/ffffff" alt="React" />
            </div>
            <div className="planet p-2" data-tooltip="Next.js">
              <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" />
            </div>
            <div className="planet p-3" data-tooltip="TypeScript">
              <img src="https://cdn.simpleicons.org/typescript/ffffff" alt="TypeScript" />
            </div>
            <div className="planet p-4" data-tooltip="JavaScript">
              <img src="https://cdn.simpleicons.org/javascript/ffffff" alt="JavaScript" />
            </div>
          </div>

          {/* Ring 2 (Middle) - Backend & Data */}
          <div className="ring ring-2">
            <div className="planet p-1" data-tooltip="Node.js">
              <img src="https://cdn.simpleicons.org/nodedotjs/ffffff" alt="Node.js" />
            </div>
            <div className="planet p-2" data-tooltip="CSS3">
              <img src="https://cdn.simpleicons.org/css3/ffffff" alt="CSS3" />
            </div>
            <div className="planet p-3" data-tooltip="PostgreSQL">
              <img src="https://cdn.simpleicons.org/postgresql/ffffff" alt="PostgreSQL" />
            </div>
            <div className="planet p-4" data-tooltip="NestJS">
              <img src="https://cdn.simpleicons.org/nestjs/ffffff" alt="NestJS" />
            </div>
          </div>

          {/* Ring 3 (Outer) - Growth & Ads */}
          <div className="ring ring-3">
            <div className="planet p-1" data-tooltip="Google Ads">
              <img src="https://cdn.simpleicons.org/googleads/ffffff" alt="Google Ads" />
            </div>
            <div className="planet p-2" data-tooltip="Meta Ads">
              <img src="https://cdn.simpleicons.org/meta/ffffff" alt="Meta Ads" />
            </div>
            <div className="planet p-3" data-tooltip="AWS">
              <img src="https://cdn.simpleicons.org/amazonaws/ffffff" alt="AWS" />
            </div>
            <div className="planet p-4" data-tooltip="OpenAI">
              <img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
