import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  delta?: string;
  loading?: boolean;
  error?: boolean;
}

export default function KPICard({
  title,
  value,
  delta,
  loading = false,
  error = false,
}: KPICardProps) {
  const isDeltaPositive = delta?.startsWith("+");

  if (loading) {
    return (
      <Card className="p-6 animate-pulse">
        <div className="h-4 w-24 bg-muted rounded mb-4" />
        <div className="h-8 w-16 bg-muted rounded mb-2" />
        <div className="h-3 w-20 bg-muted rounded" />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6 border-destructive/50">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
        <p className="text-sm text-destructive">Failed to load data</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="text-2xl font-bold mb-2">{value}</div>
      {delta && (
        <div
          className={cn(
            "text-sm flex items-center gap-1",
            isDeltaPositive ? "text-green-500" : "text-red-500"
          )}
        >
          {isDeltaPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {delta}
        </div>
      )}
    </Card>
  );
}