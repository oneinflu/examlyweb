import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "../../ui/item";
import { Section } from "../../ui/section";

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[650px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
         Built to Support Every Learner
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ScanFaceIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
             AI-Powered Tutor
            </ItemTitle>
            <ItemDescription>
            Get instant help anytime, anywhere
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MonitorSmartphoneIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Mock Test Simulator
            </ItemTitle>
            <ItemDescription>
             Real exam feel with timer + analytics
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <EclipseIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Self-Assessment Tools
            </ItemTitle>
            <ItemDescription>
              Visualize your progress over time
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <BlocksIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              EExpert-Led Classes 
            </ItemTitle>
            <ItemDescription>
              Learn from top faculty in every subject
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <FastForwardIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Gamified Streaks
            </ItemTitle>
            <ItemDescription>
              Daily learning, rewards & progress bar
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <RocketIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Homework & Class Tests 
            </ItemTitle>
            <ItemDescription>
             Created by tutors, auto-assessed
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LanguagesIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Offline Mode
            </ItemTitle>
            <ItemDescription>
              Learn even without internet
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <SquarePenIcon className="h-5 w-5 stroke-1 text-brand" />
              </ItemIcon>
              Peer Forum
            </ItemTitle>
            <ItemDescription>
             Ask doubts, answer, collaborate
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
