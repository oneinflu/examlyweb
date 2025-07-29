import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
  TileLink,
} from "../../ui/tile";
import { Section } from "../../ui/section";
import GlobeIllustration from "../../illustrations/globe";
import PipelineIllustration from "../../illustrations/pipeline";
import CodeEditorIllustration from "../../illustrations/code-editor";
import MockupMobileIllustration from "../../illustrations/mockup-mobile";
import TilesIllustration from "../../illustrations/tiles";

export default function BentoGrid() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">
          Ace Your CPA, CMA, ACCA,<br/>and EA Exams with Examly
        </h2>
        <p className="text-md max-w-[720px] text-balance text-center font-medium text-muted-foreground sm:text-xl">
         At Examly, we redefine how professionals prepare for global certifications like CPA, CMA, ACCA, and EA. With expert-led content, cutting-edge learning tools, and proven success strategies, we ensure you achieve your career goals faster and smarter.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <Tile className="col-span-12 md:col-span-5">
            <TileLink />
            <TileContent>
              <TileTitle>Real Exam Simulations
& Mock Tests</TileTitle>
              <TileDescription>
                <p className="max-w-[460px]">
                  Mock tests that replicate the real exam experience for confidence.
                </p>
              </TileDescription>
            </TileContent>
            <TileVisual className="min-h-[160px] grow items-center">
              <PipelineIllustration />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-7">
            <TileLink />
            <TileContent>
              <TileTitle>Live Expert-Led Classes</TileTitle>
              <TileDescription>
                <p className="max-w-[320px] lg:max-w-[460px]">
                  With Launch UI, the code is yours forever. You can use it as a
                  starting point for your own projects and customize it to your
                  needs.
                </p>
                <p>Never bother about subscriptions and lock-ins.</p>
              </TileDescription>
            </TileContent>
            <TileVisual className="min-h-[240px] sm:p-4 md:min-h-[360px] md:py-12 lg:px-12">
              <CodeEditorIllustration />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-4">
            <TileLink />
            <TileContent>
              <TileTitle>Offline Access Anywhere</TileTitle>
              <TileDescription>
                <p>
                  Optimized to look and feel great on all devices, operating
                  systems, and screen sizes.
                </p>
              </TileDescription>
            </TileContent>
            <TileVisual className="min-h-[300px] py-12">
              <MockupMobileIllustration />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-4">
            <TileLink />
            <TileContent>
              <TileTitle>Personalised Learning</TileTitle>
              <TileDescription>
                Lightweight and optimized, your website will will feel snappy
                and load instantly.
              </TileDescription>
            </TileContent>
            <TileVisual className="-mb-20 -mt-12 [&_svg]:h-[420px] [&_svg]:w-[420px]">
              <GlobeIllustration />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-4">
            <TileContent>
              <TileTitle>Fits right into your stack</TileTitle>
              <TileDescription>
                <p className="max-w-[460px]">
                  Integrate your landing page directly in the product while
                  using your favorite tools.
                </p>
              </TileDescription>
            </TileContent>
            <TileVisual className="-ml-40 -mr-32">
              <TilesIllustration />
            </TileVisual>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
