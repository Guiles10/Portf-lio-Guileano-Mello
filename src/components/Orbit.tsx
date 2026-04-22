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
              <Image src="/tech-logos/react.svg" alt="React" width={32} height={32} />
            </div>
            <div className="planet p-3" data-tooltip="Next.js">
              <Image src="/tech-logos/nextdotjs.svg" alt="Next.js" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-5" data-tooltip="TypeScript">
              <Image src="/tech-logos/typescript.svg" alt="TypeScript" width={32} height={32} />
            </div>
            <div className="planet p-7" data-tooltip="JavaScript">
              <Image src="/tech-logos/javascript.svg" alt="JavaScript" width={32} height={32} />
            </div>
          </div>

          {/* Ring 2 (Middle) - Frontend & Backend Logic */}
          <div className="ring ring-2 duration-25 delay-2s">
            <div className="planet p-1" data-tooltip="Node.js">
              <Image src="/tech-logos/nodedotjs.svg" alt="Node.js" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-2" data-tooltip="Sass">
              <Image src="/tech-logos/sass.svg" alt="Sass" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-4" data-tooltip="PostgreSQL">
              <Image src="/tech-logos/postgresql.svg" alt="PostgreSQL" width={32} height={32} />
            </div>
            <div className="planet p-5" data-tooltip="Prisma">
              <Image src="/tech-logos/prisma.svg" alt="Prisma" width={32} height={32} />
            </div>
            <div className="planet p-7" data-tooltip="NestJS">
              <Image src="/tech-logos/nestjs.svg" alt="NestJS" width={32} height={32} />
            </div>
            <div className="planet p-8" data-tooltip="HTML">
              <Image src="/tech-logos/html5.svg" alt="HTML" width={32} height={32} />
            </div>
            <div className="planet p-3" data-tooltip="CSS3">
              <Image src="/tech-logos/css3.svg" alt="CSS3" width={29} height={29} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          </div>

          {/* Ring 3 (Outer) - Infra & Cloud Tools */}
          <div className="ring ring-3 duration-35 delay-4s">
            <div className="planet p-1" data-tooltip="Docker">
              <Image src="/tech-logos/docker.svg" alt="Docker" width={32} height={32} />
            </div>
            <div className="planet p-2" data-tooltip="AWS">
              <Image src="/tech-logos/aws.svg" alt="AWS" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-3" data-tooltip="Tailwind CSS">
              <Image src="/tech-logos/tailwindcss.svg" alt="Tailwind" width={32} height={32} />
            </div>
            <div className="planet p-5" data-tooltip="Git">
              <Image src="/tech-logos/git.svg" alt="Git" width={32} height={32} />
            </div>
            <div className="planet p-6" data-tooltip="CI/CD">
              <Image src="/tech-logos/CICD.svg" alt="CI/CD" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-7" data-tooltip="Vercel">
              <Image src="https://cdn.simpleicons.org/vercel/ffffff" alt="Vercel" width={32} height={32} />
            </div>
            <div className="planet p-8" data-tooltip="OpenAI">
              <Image src="/tech-logos/openai.svg" alt="OpenAI" width={29} height={29} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          </div>

          {/* Ring 4 (Satellite) - Specialized Performance & UX */}
          <div className="ring ring-4 duration-40 delay-1s" style={{ width: "630px", height: "630px" }}>
            <div className="planet p-1" data-tooltip="Delphi">
              <Image src="/tech-logos/delphi.svg" alt="Delphi" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-2" data-tooltip="Claude AI">
              <Image src="/tech-logos/claude.svg" alt="Claude" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-3" data-tooltip="UX/UI">
              <Image src="/tech-logos/uxui.svg" alt="UX/UI" width={29} height={29} style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <div className="planet p-4" data-tooltip="REST API">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5-.4-3.5-3.4-6-6.9-6-2.5 0-4.6 1.3-5.8 3.2C3.2 7.8 1.5 9.4 1.5 11.5c0 2.5 2 4.5 4.5 4.5" />
                <path d="M12 11h.01M16 11h.01M8 11h.01M12 15h.01M16 15h.01M8 15h.01" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="planet p-5" data-tooltip="Google Analytics">
              <Image src="https://cdn.simpleicons.org/googleanalytics/ffffff" alt="GA" width={32} height={32} />
            </div>
            <div className="planet p-6" data-tooltip="GTM">
              <Image src="https://cdn.simpleicons.org/googletagmanager/ffffff" alt="GTM" width={32} height={32} />
            </div>
            <div className="planet p-7" data-tooltip="Google Ads">
              <Image src="https://cdn.simpleicons.org/googleads/ffffff" alt="GAds" width={32} height={32} />
            </div>
            <div className="planet p-8" data-tooltip="Meta Ads">
              <Image src="https://cdn.simpleicons.org/meta/ffffff" alt="Meta" width={32} height={32} />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
