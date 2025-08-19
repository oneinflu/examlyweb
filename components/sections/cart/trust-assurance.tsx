import { Shield, RotateCcw, HeadphonesIcon } from "lucide-react";

export function TrustAssurance() {
  return (
    <div className="mt-8 p-6 bg-muted/30 rounded-lg">
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-medium">Secure Checkout</h3>
            <p className="text-sm text-muted-foreground">SSL encrypted payment processing</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <RotateCcw className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-medium">30-Day Money Back Guarantee</h3>
            <p className="text-sm text-muted-foreground">Not satisfied? Get a full refund</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <HeadphonesIcon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-medium">24/7 Customer Support</h3>
            <p className="text-sm text-muted-foreground">Get help whenever you need it</p>
          </div>
        </div>
      </div>
    </div>
  );
}