"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  PieChart, 
  BarChart3, 
  Gauge, 
  Clock, 
  Target, 
  TrendingUp,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

export default function AnalyticsOverview() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("mcq-performance");
  const [animatedValues, setAnimatedValues] = useState({
    accuracyValues: [0, 0, 0, 0, 0],
    timeValues: [0, 0, 0, 0, 0],
    improvementValues: [0, 0, 0, 0, 0, 0]
  });

  // Animation for charts when tab changes
  useEffect(() => {
    if (!mounted) return;
    
    // Reset animation values
    setAnimatedValues({
      accuracyValues: [0, 0, 0, 0, 0],
      timeValues: [0, 0, 0, 0, 0],
      improvementValues: [0, 0, 0, 0, 0, 0]
    });
    
    // Animate values based on active tab
    const timer = setTimeout(() => {
      const duration = 1000;
      const steps = 20;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        // Animate values based on active tab
        if (activeTab === "mcq-performance") {
          setAnimatedValues(prev => ({
            ...prev,
            accuracyValues: [
              Math.floor(progress * 75),
              Math.floor(progress * 62),
              Math.floor(progress * 88),
              Math.floor(progress * 45),
              Math.floor(progress * 70)
            ]
          }));
        } else if (activeTab === "time-management") {
          setAnimatedValues(prev => ({
            ...prev,
            timeValues: [
              Math.floor(progress * 120),
              Math.floor(progress * 90),
              Math.floor(progress * 150),
              Math.floor(progress * 75),
              Math.floor(progress * 105)
            ]
          }));
        } else if (activeTab === "improvement-tracker") {
          setAnimatedValues(prev => ({
            ...prev,
            improvementValues: [
              Math.floor(progress * 65),
              Math.floor(progress * 68),
              Math.floor(progress * 72),
              Math.floor(progress * 75),
              Math.floor(progress * 82),
              Math.floor(progress * 88)
            ]
          }));
        }
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeTab, mounted]);

  // Mount animation
  useEffect(() => {
    setMounted(true);
  }, []);

  // Data for MCQ Performance
  const mcqTopics = [
    { name: "Financial Accounting", accuracy: 75, color: "var(--primary)" },
    { name: "Regulation", accuracy: 62, color: "var(--chart-2)" },
    { name: "Business Environment", accuracy: 88, color: "var(--chart-4)" },
    { name: "Auditing", accuracy: 45, color: "var(--destructive)" },
    { name: "Tax Compliance", accuracy: 70, color: "var(--chart-3)" }
  ];

  // Data for Time Management
  const timeData = [
    { topic: "Financial Accounting", actual: 120, recommended: 90 },
    { topic: "Regulation", actual: 90, recommended: 100 },
    { topic: "Business Environment", actual: 150, recommended: 120 },
    { topic: "Auditing", actual: 75, recommended: 100 },
    { topic: "Tax Compliance", actual: 105, recommended: 90 }
  ];

  // Data for Strength-Weakness Heatmap
  const strengthWeaknessData = [
    { category: "Conceptual Understanding", topics: [
      { name: "Financial Accounting", score: 85, status: "strong" },
      { name: "Regulation", score: 72, status: "medium" },
      { name: "Business Environment", score: 90, status: "strong" },
      { name: "Auditing", score: 55, status: "weak" },
      { name: "Tax Compliance", score: 78, status: "medium" }
    ]},
    { category: "Calculation Accuracy", topics: [
      { name: "Financial Accounting", score: 80, status: "medium" },
      { name: "Regulation", score: 65, status: "medium" },
      { name: "Business Environment", score: 92, status: "strong" },
      { name: "Auditing", score: 48, status: "weak" },
      { name: "Tax Compliance", score: 75, status: "medium" }
    ]},
    { category: "Time Efficiency", topics: [
      { name: "Financial Accounting", score: 70, status: "medium" },
      { name: "Regulation", score: 58, status: "weak" },
      { name: "Business Environment", score: 85, status: "strong" },
      { name: "Auditing", score: 42, status: "weak" },
      { name: "Tax Compliance", score: 68, status: "medium" }
    ]}
  ];

  // Data for Improvement Tracker
  const improvementData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 72 },
    { month: "Apr", score: 75 },
    { month: "May", score: 82 },
    { month: "Jun", score: 88 }
  ];

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "strong":
        return "bg-primary text-primary-foreground";
      case "medium":
        return "bg-chart-4 text-primary-foreground";
      case "weak":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "strong":
        return <CheckCircle className="w-4 h-4" />;
      case "medium":
        return <AlertTriangle className="w-4 h-4" />;
      case "weak":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Gauge className="w-4 h-4 mr-2" />
            Performance Analytics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Interactive Overview of{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Gain deep insights into your performance with our comprehensive analytics tools.
            Track your progress, identify strengths and weaknesses, and optimize your study time.
          </p>
        </div>

        {/* Tabs Interface */}
        <Tabs 
          defaultValue="mcq-performance" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-6xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-transparent">
            <TabsTrigger 
              value="mcq-performance"
              className="flex items-center gap-2 p-4 data-[state=active]:bg-primary/10"
            >
              <div className="p-2 rounded-full bg-primary/20">
                <PieChart className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">MCQ Performance</div>
                <div className="text-xs text-muted-foreground">Topic accuracy breakdown</div>
              </div>
            </TabsTrigger>
            
            <TabsTrigger 
              value="time-management"
              className="flex items-center gap-2 p-4 data-[state=active]:bg-chart-2/10"
            >
              <div className="p-2 rounded-full bg-chart-2/20">
                <Clock className="w-5 h-5 text-chart-2" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Time Management</div>
                <div className="text-xs text-muted-foreground">Actual vs recommended time</div>
              </div>
            </TabsTrigger>
            
            <TabsTrigger 
              value="strength-weakness"
              className="flex items-center gap-2 p-4 data-[state=active]:bg-chart-4/10"
            >
              <div className="p-2 rounded-full bg-chart-4/20">
                <Target className="w-5 h-5 text-chart-4" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Strength-Weakness</div>
                <div className="text-xs text-muted-foreground">Topic proficiency heatmap</div>
              </div>
            </TabsTrigger>
            
            <TabsTrigger 
              value="improvement-tracker"
              className="flex items-center gap-2 p-4 data-[state=active]:bg-chart-3/10"
            >
              <div className="p-2 rounded-full bg-chart-3/20">
                <TrendingUp className="w-5 h-5 text-chart-3" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Improvement Tracker</div>
                <div className="text-xs text-muted-foreground">Progress over time</div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="bg-card border border-border/50 rounded-xl p-6 shadow-lg">
            {/* MCQ Performance Tab */}
            <TabsContent 
              value="mcq-performance" 
              className="animate-fade-in space-y-6 min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">MCQ Performance Breakdown</h3>
                <Badge variant="outline" className="bg-primary/10 border-primary/20">
                  <BookOpen className="w-3 h-3 mr-1" />
                  CPA/CMA Topics
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Pie Chart Visualization */}
                <div className="relative aspect-square max-w-[300px] mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">68%</div>
                      <div className="text-sm text-muted-foreground">Overall Accuracy</div>
                    </div>
                  </div>
                  <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                    {mcqTopics.map((topic, index) => {
                      // Calculate the pie segments
                      const total = mcqTopics.reduce((sum, t) => sum + t.accuracy, 0);
                      const angle = (topic.accuracy / total) * 360;
                      const prevAngles = mcqTopics
                        .slice(0, index)
                        .reduce((sum, t) => sum + (t.accuracy / total) * 360, 0);
                      
                      // Convert to SVG arc parameters
                      const startAngle = prevAngles * (Math.PI / 180);
                      const endAngle = (prevAngles + angle) * (Math.PI / 180);
                      
                      const x1 = 50 + 40 * Math.cos(startAngle);
                      const y1 = 50 + 40 * Math.sin(startAngle);
                      const x2 = 50 + 40 * Math.cos(endAngle);
                      const y2 = 50 + 40 * Math.sin(endAngle);
                      
                      const largeArcFlag = angle > 180 ? 1 : 0;
                      
                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={topic.color}
                          stroke="var(--background)"
                          strokeWidth="0.5"
                          style={{
                            opacity: mounted ? animatedValues.accuracyValues[index] / 100 : 0,
                            transition: "opacity 0.5s ease-out"
                          }}
                        />
                      );
                    })}
                  </svg>
                </div>
                
                {/* Topic Breakdown */}
                <div className="space-y-4">
                  {mcqTopics.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: topic.color }}
                          />
                          <span className="font-medium">{topic.name}</span>
                        </div>
                        <span className="font-bold">
                          {animatedValues.accuracyValues[index]}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${animatedValues.accuracyValues[index]}%`,
                            backgroundColor: topic.color 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Key Insights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-primary/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Strongest Area</h5>
                        <p className="text-sm text-muted-foreground">Business Environment (88%)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-destructive/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-destructive/10">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Weakest Area</h5>
                        <p className="text-sm text-muted-foreground">Auditing (45%)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-chart-4/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-chart-4/10">
                        <Target className="w-4 h-4 text-chart-4" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Focus Recommendation</h5>
                        <p className="text-sm text-muted-foreground">Prioritize Auditing practice</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Time Management Tab */}
            <TabsContent 
              value="time-management" 
              className="animate-fade-in space-y-6 min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Time Management Analysis</h3>
                <Badge variant="outline" className="bg-chart-2/10 border-chart-2/20">
                  <Clock className="w-3 h-3 mr-1 text-chart-2" />
                  Minutes per Topic
                </Badge>
              </div>
              
              <div className="space-y-8">
                {/* Bar Chart */}
                <div className="h-64 flex items-end gap-4 px-4">
                  {timeData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      {/* Actual Time Bar */}
                      <div className="w-full flex flex-col items-center">
                        <div 
                          className="w-full bg-chart-2/80 rounded-t-md transition-all duration-1000 ease-out"
                          style={{ 
                            height: `${(animatedValues.timeValues[index] / 150) * 100}%`,
                            maxHeight: "100%"
                          }}
                        />
                        <div className="text-xs font-medium mt-1">
                          {animatedValues.timeValues[index]}
                        </div>
                      </div>
                      
                      {/* Recommended Time Line */}
                      <div 
                        className="w-full border-t-2 border-dashed border-chart-3 relative"
                        style={{ 
                          bottom: `${(item.recommended / 150) * 100}%`,
                          position: "absolute"
                        }}
                      >
                        <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-chart-3">
                          {item.recommended}
                        </span>
                      </div>
                      
                      {/* Topic Label */}
                      <div className="text-xs text-muted-foreground mt-4 text-center w-full truncate">
                        {item.topic}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-chart-2/80 rounded-sm" />
                    <span className="text-sm">Actual Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 border-t-2 border-dashed border-chart-3" />
                    <span className="text-sm">Recommended Time</span>
                  </div>
                </div>
                
                {/* Time Efficiency Insights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="p-4 bg-destructive/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-destructive/10">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Over-Allocated</h5>
                        <p className="text-sm text-muted-foreground">Business Environment (+30 min)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-chart-4/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-chart-4/10">
                        <Target className="w-4 h-4 text-chart-4" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Under-Allocated</h5>
                        <p className="text-sm text-muted-foreground">Auditing (-25 min)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-primary/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Optimal Balance</h5>
                        <p className="text-sm text-muted-foreground">Regulation (±10 min)</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Strength-Weakness Heatmap Tab */}
            <TabsContent 
              value="strength-weakness" 
              className="animate-fade-in space-y-6 min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Strength-Weakness Heatmap</h3>
                <Badge variant="outline" className="bg-chart-4/10 border-chart-4/20">
                  <Target className="w-3 h-3 mr-1 text-chart-4" />
                  Topic Proficiency
                </Badge>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 text-left font-semibold text-muted-foreground">Category / Topic</th>
                      {strengthWeaknessData[0].topics.map((topic, index) => (
                        <th key={index} className="p-3 text-center font-semibold text-muted-foreground">
                          {topic.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {strengthWeaknessData.map((category, catIndex) => (
                      <tr key={catIndex} className={catIndex % 2 === 0 ? "bg-muted/10" : ""}>
                        <td className="p-3 font-medium border-t border-border">
                          {category.category}
                        </td>
                        {category.topics.map((topic, topicIndex) => (
                          <td 
                            key={topicIndex} 
                            className="p-3 text-center border-t border-border"
                          >
                            <div className="flex flex-col items-center gap-1">
                              <div 
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(topic.status)}`}
                              >
                                {getStatusIcon(topic.status)}
                              </div>
                              <div className="font-bold">{topic.score}%</div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-sm">Strong (80%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-chart-4" />
                  <span className="text-sm">Medium (60-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-destructive" />
                  <span className="text-sm">Weak (Below 60%)</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Proficiency Analysis</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-primary/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Strongest Combination</h5>
                        <p className="text-sm text-muted-foreground">Business Environment - Conceptual Understanding (90%)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-destructive/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-destructive/10">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Critical Improvement Area</h5>
                        <p className="text-sm text-muted-foreground">Auditing - Time Efficiency (42%)</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Improvement Tracker Tab */}
            <TabsContent 
              value="improvement-tracker" 
              className="animate-fade-in space-y-6 min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Improvement Tracker</h3>
                <Badge variant="outline" className="bg-chart-3/10 border-chart-3/20">
                  <TrendingUp className="w-3 h-3 mr-1 text-chart-3" />
                  6-Month Progress
                </Badge>
              </div>
              
              <div className="h-64 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground pr-2">
                  <div>100%</div>
                  <div>75%</div>
                  <div>50%</div>
                  <div>25%</div>
                  <div>0%</div>
                </div>
                
                {/* Chart area */}
                <div className="ml-8 h-full flex items-end relative">
                  {/* Horizontal grid lines */}
                  {[0, 25, 50, 75, 100].map((value) => (
                    <div 
                      key={value}
                      className="absolute border-t border-dashed border-muted/30 w-full"
                      style={{ bottom: `${value}%` }}
                    />
                  ))}
                  
                  {/* Line chart */}
                  <svg 
                    className="absolute inset-0 h-full w-full" 
                    viewBox={`0 0 ${improvementData.length * 60} 100`}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--chart-3)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="var(--chart-3)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area under the line */}
                    <path
                      d={`
                        M 0 ${100 - (animatedValues.improvementValues[0] || 0)}
                        ${improvementData.map((point, i) => 
                          `L ${i * 60 + 30} ${100 - (animatedValues.improvementValues[i] || 0)}`
                        ).join(' ')}
                        L ${(improvementData.length - 1) * 60 + 30} 100
                        L 0 100
                        Z
                      `}
                      fill="url(#lineGradient)"
                      opacity="0.5"
                    />
                    
                    {/* The line itself */}
                    <path
                      d={`
                        M 0 ${100 - (animatedValues.improvementValues[0] || 0)}
                        ${improvementData.map((point, i) => 
                          `L ${i * 60 + 30} ${100 - (animatedValues.improvementValues[i] || 0)}`
                        ).join(' ')}
                      `}
                      fill="none"
                      stroke="var(--chart-3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {improvementData.map((point, i) => (
                      <circle
                        key={i}
                        cx={i * 60 + 30}
                        cy={100 - (animatedValues.improvementValues[i] || 0)}
                        r="4"
                        fill="var(--background)"
                        stroke="var(--chart-3)"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 translate-y-full pt-2 w-full flex justify-between text-xs text-muted-foreground">
                    {improvementData.map((point, i) => (
                      <div key={i} style={{ left: `${(i / (improvementData.length - 1)) * 100}%` }} className="absolute transform -translate-x-1/2">
                        {point.month}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Progress Insights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-primary/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Overall Growth</h5>
                        <p className="text-sm text-muted-foreground">+23% in 6 months</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-chart-4/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-chart-4/10">
                        <Target className="w-4 h-4 text-chart-4" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Best Month</h5>
                        <p className="text-sm text-muted-foreground">May (+7% improvement)</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-chart-3/5 border-0">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-chart-3/10">
                        <BrainCircuit className="w-4 h-4 text-chart-3" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Projected Score</h5>
                        <p className="text-sm text-muted-foreground">92% by September</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </Section>
  );
}