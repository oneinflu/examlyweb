"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Wifi, 
  WifiOff, 
  Smartphone, 
  Laptop, 
  Plane, 
  Train, 
  Coffee, 
  RotateCcw, 
  CheckCircle, 
  Globe, 
  Users,
  ArrowRight,
  Play,
  BookOpen,
  FileText,
  PenTool
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OfflineAccessHero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Animation cycle for the demo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev === 0) {
          // Start download
          setIsDownloading(true);
          setDownloadProgress(0);
          return 1;
        } else if (prev === 1) {
          // Complete download, go offline
          setIsDownloading(false);
          setDownloadProgress(100);
          setIsOffline(true);
          return 2;
        } else if (prev === 2) {
          // Start sync when back online
          setIsOffline(false);
          setIsSyncing(true);
          return 3;
        } else {
          // Reset cycle
          setIsSyncing(false);
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Download progress animation
  useEffect(() => {
    if (isDownloading) {
      const progressInterval = setInterval(() => {
        setDownloadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      return () => clearInterval(progressInterval);
    }
  }, [isDownloading]);

  const downloadableItems = [
    { icon: BookOpen, label: "Course Materials", size: "2.4 GB" },
    { icon: PenTool, label: "Mock Tests", size: "850 MB" },
    { icon: FileText, label: "Study Notes", size: "1.2 GB" }
  ];

  const studyLocations = [
    { icon: Train, label: "On the Train", description: "Commute productively" },
    { icon: Coffee, label: "In a Café", description: "Study anywhere" },
    { icon: Plane, label: "During Travel", description: "Never miss a session" }
  ];

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="container max-w-container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">
              <Download className="w-3 h-3 mr-1" />
              Offline Learning Available
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Your Learning, Always With You —{" "}
                <span className="text-primary">Internet or Not</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Download courses, mock tests, and notes to study anywhere — on a bus, 
                in a café, or during travel — and sync your progress when you&apos;re back online.
              </p>
            </div>

            {/* Study Locations */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Study Anywhere:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {studyLocations.map((location, index) => {
                  const IconComponent = location.icon;
                  return (
                    <div 
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-center"
                    >
                      <IconComponent className="w-8 h-8 text-primary mb-2" />
                      <span className="font-medium text-gray-900">{location.label}</span>
                      <span className="text-sm text-gray-600">{location.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Start Offline Learning Today
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                See How It Works
              </Button>
            </div>

            {/* Trust Snippet */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-900">Used in 50+ countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-gray-900">Trusted in low-connectivity regions</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Offline Learning Demo</h3>
                <div className="flex items-center gap-2">
                  {isOffline ? (
                    <>
                      <WifiOff className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600 font-medium">Offline</span>
                    </>
                  ) : (
                    <>
                      <Wifi className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Online</span>
                    </>
                  )}
                </div>
              </div>

              {/* Device Mockups */}
              <div className="flex items-center justify-center gap-8 mb-8">
                {/* Phone */}
                <div className="relative">
                  <div className="w-16 h-28 bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Smartphone className="w-8 h-8 text-white" />
                    {isDownloading && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <Download className="w-6 h-6 text-primary animate-bounce" />
                      </div>
                    )}
                    {downloadProgress === 100 && (
                      <div className="absolute top-1 right-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 block text-center">Mobile</span>
                </div>

                {/* Laptop */}
                <div className="relative">
                  <div className="w-24 h-16 bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <Laptop className="w-10 h-10 text-white" />
                    {isDownloading && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <Download className="w-8 h-8 text-primary animate-bounce" />
                      </div>
                    )}
                    {downloadProgress === 100 && (
                      <div className="absolute top-1 right-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 block text-center">Laptop</span>
                </div>
              </div>

              {/* Download Progress */}
              {isDownloading && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Downloading content...</span>
                    <span className="text-sm text-gray-600">{downloadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-200"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Downloadable Content */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium text-gray-900">Available for Download:</h4>
                {downloadableItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        downloadProgress === 100 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-gray-900">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">{item.size}</span>
                        {downloadProgress === 100 && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sync Status */}
              {isSyncing && (
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <RotateCcw className="w-5 h-5 text-blue-500 animate-spin mr-2" />
                  <span className="text-sm font-medium text-blue-700">Syncing progress when back online...</span>
                </div>
              )}

              {/* Study Status */}
              {isOffline && !isSyncing && (
                <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-700">Studying offline - progress saved locally</span>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}