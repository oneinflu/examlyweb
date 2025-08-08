"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  AlertTriangle, 
  Wifi, 
  WifiOff, 
  Clock, 
  Frown,
  Smile,
  Signal,
  SignalLow,
  Plane,
  Train,
  Coffee,
  BookOpen,
  Download,
  CheckCircle,
  X,
  ArrowRight
} from "lucide-react";

export default function OfflineAccessProblem() {
  const [hoveredPain, setHoveredPain] = useState<number | null>(null);

  const painPoints = [
    {
      icon: SignalLow,
      title: "Poor connectivity breaks focus during live sessions",
      description: "Buffering, lag, and connection drops interrupt your learning flow and cause frustration",
      impact: "40% session time lost",
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Wasted time during commutes and travel",
      description: "Hours of potential study time lost because you can't access your materials without internet",
      impact: "10+ hours weekly",
      color: "text-orange-500"
    },
    {
      icon: BookOpen,
      title: "No way to revise notes without Wi-Fi/data",
      description: "Critical review sessions become impossible when you're in areas with poor or no connectivity",
      impact: "50% revision missed",
      color: "text-yellow-500"
    }
  ];

  return (
    <Section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-red-50 border-red-200 text-red-700 dark:bg-red-950 dark:border-red-800 dark:text-red-300">
            <AlertTriangle className="w-3 h-3 mr-1" />
            The Connectivity Problem
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            The Internet Shouldn&apos;t Decide <span className="text-red-500">When You Can Study</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t let poor connectivity or data limitations hold back your exam preparation. 
            Your success shouldn&apos;t depend on having perfect internet access.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((pain, index) => {
            const IconComponent = pain.icon;
            return (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 cursor-pointer group hover:shadow-lg ${
                  hoveredPain === index ? 'border-red-300 shadow-lg shadow-red-100 dark:shadow-red-900/20' : ''
                }`}
                onMouseEnter={() => setHoveredPain(index)}
                onMouseLeave={() => setHoveredPain(null)}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-red-50 dark:bg-red-950/30 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className={`w-6 h-6 ${pain.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">
                      {pain.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {pain.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 dark:bg-red-950/50 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm font-medium text-red-700 dark:text-red-300">{pain.impact}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Frustrated Student - Online Dependent */}
          <Card className="p-8 border-red-200 bg-red-50/50 dark:bg-red-950/20 dark:border-red-800">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <Frown className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-red-700 dark:text-red-300 mb-2">Online-Dependent Student</h3>
              <p className="text-red-600 dark:text-red-400 text-sm">Struggling with connectivity issues</p>
            </div>

            {/* Scenario Visualization */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <SignalLow className="w-5 h-5 text-red-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-red-700 dark:text-red-300">Poor Signal Area</div>
                  <div className="text-xs text-red-600 dark:text-red-400">Can&apos;t access study materials</div>
                </div>
                <X className="w-4 h-4 text-red-500" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <Train className="w-5 h-5 text-red-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-red-700 dark:text-red-300">Commute Time</div>
                  <div className="text-xs text-red-600 dark:text-red-400">2 hours daily - completely wasted</div>
                </div>
                <X className="w-4 h-4 text-red-500" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                <WifiOff className="w-5 h-5 text-red-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-red-700 dark:text-red-300">No Internet Access</div>
                  <div className="text-xs text-red-600 dark:text-red-400">Can&apos;t review notes or practice</div>
                </div>
                <X className="w-4 h-4 text-red-500" />
              </div>
            </div>

            <div className="text-center p-4 bg-red-100 dark:bg-red-950/50 rounded-lg">
              <div className="text-sm font-medium text-red-700 dark:text-red-300">Result: Inconsistent preparation</div>
              <div className="text-xs text-red-600 dark:text-red-400 mt-1">Stress, gaps in learning, poor performance</div>
            </div>
          </Card>

          {/* Happy Student - Offline Capable */}
          <Card className="p-8 border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Offline-Ready Student</h3>
              <p className="text-green-600 dark:text-green-400 text-sm">Learning anywhere, anytime</p>
            </div>

            {/* Scenario Visualization */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <Download className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-green-700 dark:text-green-300">Pre-Downloaded Content</div>
                  <div className="text-xs text-green-600 dark:text-green-400">All materials available offline</div>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <Train className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-green-700 dark:text-green-300">Productive Commute</div>
                  <div className="text-xs text-green-600 dark:text-green-400">2 hours daily - fully utilized</div>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>

              <div className="flex items-center gap-3 p-3 bg-white dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <BookOpen className="w-5 h-5 text-green-500" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-green-700 dark:text-green-300">Offline Study Sessions</div>
                  <div className="text-xs text-green-600 dark:text-green-400">Notes, tests, videos - all accessible</div>
                </div>
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
            </div>

            <div className="text-center p-4 bg-green-100 dark:bg-green-950/50 rounded-lg">
              <div className="text-sm font-medium text-green-700 dark:text-green-300">Result: Consistent, flexible learning</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">Better preparation, reduced stress, higher scores</div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-muted-foreground mb-4">
            <span className="text-sm">Ready to study without limits?</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
          <p className="text-lg font-medium text-foreground">
            Download your content once, study everywhere
          </p>
        </div>
      </div>
    </Section>
  );
}