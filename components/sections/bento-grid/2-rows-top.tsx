import {
  Tile,
  
  TileTitle,
  TileDescription,
  TileContent,
 
} from "../../ui/tile";
import { Section } from "../../ui/section";
import Image from "next/image";

export default function BentoGrid() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col  gap-6 sm:gap-12">
        <h2 className="text-balance  text-3xl font-semibold sm:text-5xl">
         Unmatched productivity
        </h2>
        <p className="text-md max-w-[720px] text-balance  font-medium text-muted-foreground sm:text-xl">
         At Examly, we redefine how professionals prepare for global certifications like CPA, CMA, ACCA, and EA. With expert-led content, cutting-edge learning tools, and proven success strategies, we ensure you achieve your career goals faster and smarter.
        </p>
        <div className="grid grid-cols-12 gap-4 aspect-[3/1] w-full">
          {/* First column - Real Exam Simulations */}
          <Tile 
            className="col-span-12 md:col-span-4 relative overflow-hidden p-0 h-full"
            style={{ backgroundImage: "url(/bg1.png)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300"></div>
            <TileContent className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
              <div>
                <TileTitle className="text-white">Real Exam Simulations & Mock Tests</TileTitle>
                <TileDescription className="text-white/80">
                  <p className="max-w-[460px]">
                    Mock tests that replicate the real exam experience for confidence.
                  </p>
                </TileDescription>
              </div>
            </TileContent>
          </Tile>
          
          {/* Second column - Two rows */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4 h-full">
            {/* Top row - Live Expert-Led Classes */}
            <Tile 
              className="relative overflow-hidden p-0 flex-1"
              style={{ backgroundImage: "url(/bg2.png)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300"></div>
              <TileContent className="relative z-10 p-6 text-white">
                <TileTitle className="text-white">Live Expert-Led Classes</TileTitle>
                <TileDescription className="text-white/80">
                  <p>
                    Learn from industry experts through interactive live sessions.
                  </p>
                </TileDescription>
              </TileContent>
            </Tile>
            
            {/* Bottom row - Offline Access Anywhere */}
            <Tile 
              className="relative overflow-hidden p-0 flex-1"
              style={{ background: "linear-gradient(to right, #143E39, #056D68)", backgroundSize: "cover" }}
            >
              <div className="absolute inset-0 hover:bg-black/10 transition-all duration-300"></div>
              <TileContent className="relative z-10 p-6 text-white">
                <TileTitle className="text-white">Offline Access Anywhere</TileTitle>
                <TileDescription className="text-white/80">
                  <p>
                    Study on any device, anytime, anywhere.
                  </p>
                </TileDescription>
                <div className="flex items-center mt-4 space-x-3">
                  <Image src="/offline.svg" alt="iOS compatibility" width={180} height={24} />
                </div>
              </TileContent>
            </Tile>
          </div>
          
          {/* Third column - Personalised Learning Paths */}
          <Tile 
            className="col-span-12 md:col-span-4 relative overflow-hidden p-0 h-full"
            style={{ backgroundImage: "url(/plan.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-300"></div>
            <TileContent className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
              <div>
                <TileTitle className="text-white">Personalized Learning Paths</TileTitle>
                <TileDescription className="text-white/80">
                  <p>
                    Adaptive study plans tailored to your strengths and weaknesses.
                  </p>
                </TileDescription>
              </div>
            </TileContent>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
