import { Card } from "@/components/ui/card";
import { BarChart3, Users, Calendar, FileText, TrendingUp, DollarSign } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="w-full aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted rounded-xl p-4 shadow-xl">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-4 h-full">
        {/* KPI Cards */}
        <Card className="p-4 flex flex-col justify-between animate-pulse-slow">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Active Students</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">2,547</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% vs last week
            </div>
          </div>
        </Card>

        <Card className="p-4 flex flex-col justify-between animate-pulse-slow delay-100">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Classes Today</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-muted-foreground">4 hours remaining</div>
          </div>
        </Card>

        <Card className="p-4 flex flex-col justify-between animate-pulse-slow delay-200">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Assignments</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">89%</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> On-time submission
            </div>
          </div>
        </Card>

        {/* Chart Area */}
        <div className="col-span-2 row-span-2 bg-muted/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">Weekly Performance</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-muted" />
              <div className="w-2 h-2 rounded-full bg-muted" />
            </div>
          </div>
          <div className="h-[calc(100%-2rem)] flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
              <div key={i} className="w-full">
                <div 
                  className="w-full bg-primary/20 rounded-sm animate-grow"
                  style={{ 
                    height: `${height}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Card */}
        <Card className="p-4 flex flex-col justify-between animate-pulse-slow delay-300">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Revenue</span>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">₹4.2L</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +8% this month
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}