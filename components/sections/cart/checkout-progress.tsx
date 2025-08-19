interface CheckoutProgressProps {
  currentStep: 'cart' | 'checkout' | 'payment' | 'confirmation';
}

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  const steps = ['cart', 'checkout', 'payment', 'confirmation'];
  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="relative mt-8">
      <div className="flex justify-between mb-2 text-sm">
        {steps.map((step) => (
          <span
            key={step}
            className={step === currentStep ? 'font-medium text-primary' : 'text-muted-foreground'}
          >
            {step.charAt(0).toUpperCase() + step.slice(1)}
          </span>
        ))}
      </div>
      <div className="h-2 bg-muted rounded-full">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}