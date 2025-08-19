import { Lock } from "lucide-react";

interface CheckoutStep {
  label: string;
  status: "completed" | "current" | "upcoming";
}

export default function CheckoutHeader() {
  const steps: CheckoutStep[] = [
    { label: "Cart", status: "completed" },
    { label: "Checkout", status: "current" },
    { label: "Payment", status: "upcoming" },
    { label: "Confirmation", status: "upcoming" }
  ];

  return (
    <header className="border-b py-6">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                {/* Step Circle */}
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${step.status === "completed" ? "bg-primary text-primary-foreground" :
                      step.status === "current" ? "bg-primary/20 text-primary border-2 border-primary" :
                      "bg-muted text-muted-foreground"}
                  `}
                >
                  {index + 1}
                </div>
                
                {/* Step Label */}
                <span className={`ml-2 text-sm font-medium
                  ${step.status === "current" ? "text-primary" :
                    step.status === "completed" ? "text-foreground" :
                    "text-muted-foreground"}
                `}>
                  {step.label}
                </span>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`h-[2px] w-16 mx-2
                    ${step.status === "completed" ? "bg-primary" : "bg-muted"}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Secure Checkout Badge */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span>SSL Secured Payment</span>
        </div>
      </div>
    </header>
  );
}