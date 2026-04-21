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

          {/* Ring 2 (Middle) - Frontend & Backend Logic */}
          <div className="ring ring-2 duration-25 delay-2s">
            <div className="planet p-1" data-tooltip="Node.js">
              <img src="https://cdn.simpleicons.org/nodedotjs/ffffff" alt="Node.js" />
            </div>
            <div className="planet p-2" data-tooltip="Sass">
              <img src="/tech-logos/sass.png" alt="Sass" style={{ width: "24px", filter: "brightness(0) invert(1)" }} />
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
            <div className="planet p-8" data-tooltip="HTML">
              <img src="https://cdn.simpleicons.org/html5/ffffff" alt="HTML" />
            </div>
            <div className="planet p-3" data-tooltip="CSS">
              <img src="/tech-logos/css.png" alt="CSS" style={{ width: "24px" }} />
            </div>
          </div>

          {/* Ring 3 (Outer) - Infra & Cloud Tools */}
          <div className="ring ring-3 duration-35 delay-4s">
            <div className="planet p-1" data-tooltip="Docker">
              <img src="https://cdn.simpleicons.org/docker/ffffff" alt="Docker" />
            </div>
            <div className="planet p-2" data-tooltip="AWS">
              <img src="/tech-logos/aws.png" alt="AWS" style={{ width: "24px" }} />
            </div>
            <div className="planet p-3" data-tooltip="Tailwind CSS">
              <img src="https://cdn.simpleicons.org/tailwindcss/ffffff" alt="Tailwind" />
            </div>
            <div className="planet p-5" data-tooltip="Git">
              <img src="https://cdn.simpleicons.org/git/ffffff" alt="Git" />
            </div>
            <div className="planet p-6" data-tooltip="CI/CD">
              <img src="https://cdn.simpleicons.org/githubactions/ffffff" alt="CI/CD" />
            </div>
            <div className="planet p-7" data-tooltip="Vercel">
              <img src="https://cdn.simpleicons.org/vercel/ffffff" alt="Vercel" />
            </div>
            <div className="planet p-8" data-tooltip="OpenAI">
              <img src="/tech-logos/openai.png" alt="OpenAI" style={{ width: "24px" }} />
            </div>
          </div>

          {/* Ring 4 (Satellite) - Specialized Performance & UX */}
          <div className="ring ring-4 duration-40 delay-1s" style={{ width: "630px", height: "630px" }}>
            <div className="planet p-1" data-tooltip="Delphi">
              <img src="/tech-logos/delphi.png" alt="Delphi" style={{ width: "24px" }} />
            </div>
            <div className="planet p-2" data-tooltip="Claude AI">
              <img src="/tech-logos/claude.png" alt="Claude" style={{ width: "24px" }} />
            </div>
            <div className="planet p-3" data-tooltip="UX/UI">
              <img src="/tech-logos/ux-ui.png" alt="UX/UI" style={{ width: "24px" }} />
            </div>
            <div className="planet p-4" data-tooltip="REST API">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5-.4-3.5-3.4-6-6.9-6-2.5 0-4.6 1.3-5.8 3.2C3.2 7.8 1.5 9.4 1.5 11.5c0 2.5 2 4.5 4.5 4.5" />
                <path d="M12 11h.01M16 11h.01M8 11h.01M12 15h.01M16 15h.01M8 15h.01" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="planet p-5" data-tooltip="Google Analytics">
              <img src="https://cdn.simpleicons.org/googleanalytics/ffffff" alt="GA" />
            </div>
            <div className="planet p-6" data-tooltip="GTM">
              <img src="https://cdn.simpleicons.org/googletagmanager/ffffff" alt="GTM" />
            </div>
            <div className="planet p-7" data-tooltip="Google Ads">
              <img src="https://cdn.simpleicons.org/googleads/ffffff" alt="GAds" />
            </div>
            <div className="planet p-8" data-tooltip="Meta Ads">
              <img src="https://cdn.simpleicons.org/meta/ffffff" alt="Meta" />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
