import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Cloud, RefreshCcw, Repeat, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SyncFeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const syncFeatures: SyncFeatureProps[] = [
  {
    title: "Auto-resume downloads",
    description: "Never lose progress. Downloads automatically resume if interrupted, ensuring a seamless experience even with spotty connections.",
    icon: Repeat,
  },
  {
    title: "Partial sync",
    description: "Save data and time. Only uploads changes, not entire files, making syncs faster and more efficient.",
    icon: Zap,
  },
  {
    title: "Version updates",
    description: "Stay current effortlessly. New content automatically refreshes when online, so you always have the latest study materials.",
    icon: RefreshCcw,
  },
  {
    title: "Conflict resolution",
    description: "Work without worry. Intelligently handles changes made from multiple devices, ensuring your data is always consistent.",
    icon: CheckCircle,
  },
];

export function OfflineAccessSync() {
  return (
    <Section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Smart Sync Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience reliability and smoothness with our intelligent sync capabilities.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {syncFeatures.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mb-2 text-xl font-semibold">
                  {feature.title}
                </CardTitle>
                <CardContent className="text-muted-foreground p-0">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

       
      </div>
    </Section>
  );
}