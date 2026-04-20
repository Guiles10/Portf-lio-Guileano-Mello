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

          {/* Ring 1 (Inner) - Core Frameworks */}
          <div className="ring ring-1 duration-15">
            <div className="planet p-1" data-tooltip="React">
              <img src="https://cdn.simpleicons.org/react/ffffff" alt="React" />
            </div>
            <div className="planet p-3" data-tooltip="Next.js">
              <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" />
            </div>
            <div className="planet p-5" data-tooltip="TypeScript">
              <img src="https://cdn.simpleicons.org/typescript/ffffff" alt="TypeScript" />
            </div>
            <div className="planet p-7" data-tooltip="JavaScript">
              <img src="https://cdn.simpleicons.org/javascript/ffffff" alt="JavaScript" />
            </div>
          </div>

          {/* Ring 2 (Middle) - Backend & Data */}
          <div className="ring ring-2 duration-25 delay-2s">
            <div className="planet p-1" data-tooltip="Node.js">
              <img src="https://cdn.simpleicons.org/nodedotjs/ffffff" alt="Node.js" />
            </div>
            <div className="planet p-2" data-tooltip="Python">
              <img src="https://cdn.simpleicons.org/python/ffffff" alt="Python" />
            </div>
            <div className="planet p-4" data-tooltip="PostgreSQL">
              <img src="https://cdn.simpleicons.org/postgresql/ffffff" alt="PostgreSQL" />
            </div>
            <div className="planet p-5" data-tooltip="Prisma">
              <img src="https://cdn.simpleicons.org/prisma/ffffff" alt="Prisma" />
            </div>
            <div className="planet p-7" data-tooltip="NestJS">
              <img src="https://cdn.simpleicons.org/nestjs/ffffff" alt="NestJS" />
            </div>
            <div className="planet p-8" data-tooltip="Django">
              <img src="https://cdn.simpleicons.org/django/ffffff" alt="Django" />
            </div>
          </div>

          {/* Ring 3 (Outer) - Tools & Infra */}
          <div className="ring ring-3 duration-35 delay-4s">
            <div className="planet p-1" data-tooltip="Docker">
              <img src="https://cdn.simpleicons.org/docker/ffffff" alt="Docker" />
            </div>
            <div className="planet p-2" data-tooltip="AWS">
              <img src="https://cdn.simpleicons.org/amazonwebservices/ffffff" alt="AWS" />
            </div>
            <div className="planet p-3" data-tooltip="Tailwind CSS">
              <img src="https://cdn.simpleicons.org/tailwindcss/ffffff" alt="Tailwind CSS" />
            </div>
            <div className="planet p-5" data-tooltip="Git">
              <img src="https://cdn.simpleicons.org/git/ffffff" alt="Git" />
            </div>
            <div className="planet p-6" data-tooltip="Sass">
              <img src="https://cdn.simpleicons.org/sass/ffffff" alt="Sass" />
            </div>
            <div className="planet p-7" data-tooltip="Vercel">
              <img src="https://cdn.simpleicons.org/vercel/ffffff" alt="Vercel" />
            </div>
            <div className="planet p-8" data-tooltip="OpenAI">
              <img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" />
            </div>
          </div>

          {/* Ring 4 (Satellite) - Specialized & Legacy */}
          <div className="ring duration-40 delay-1s" style={{ width: "630px", height: "630px" }}>
            <div className="planet p-1" data-tooltip="Delphi">
              <img src="https://cdn.simpleicons.org/embarcadero/ffffff" alt="Delphi" />
            </div>
            <div className="planet p-2" data-tooltip="Claude AI">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div className="planet p-4" data-tooltip="REST API">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5-.4-3.5-3.4-6-6.9-6-2.5 0-4.6 1.3-5.8 3.2C3.2 7.8 1.5 9.4 1.5 11.5c0 2.5 2 4.5 4.5 4.5" />
                <path d="M12 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                <path d="M12 11v2M12 17v2M9.5 12.5l1.5 1.5M13 16l1.5 1.5M8 15h2M14 15h2M9.5 17.5l1.5-1.5M13 14l1.5-1.5" />
              </svg>
            </div>
            <div className="planet p-5" data-tooltip="Google Ads">
              <img src="https://cdn.simpleicons.org/googleads/ffffff" alt="Google Ads" />
            </div>
            <div className="planet p-7" data-tooltip="Meta Ads">
              <img src="https://cdn.simpleicons.org/meta/ffffff" alt="Meta Ads" />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
