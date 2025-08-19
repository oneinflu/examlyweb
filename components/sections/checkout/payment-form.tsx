import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, CreditCard, Info } from "lucide-react";

export function PaymentForm() {
  const [loading, setLoading] = useState(false);
  const [cardType, setCardType] = useState<"visa" | "mastercard" | null>(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: ""
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/.{1,4}/g);
    const match = matches ? matches.join(" ") : v;
    return match.substring(0, 19); // Allows for 16 digits + 3 spaces
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? "/" + v.slice(2, 4) : "");
    }
    return v;
  };

  const detectCardType = (number: string) => {
    const cleaned = number.replace(/\s+/g, "");
    if (cleaned.startsWith("4")) {
      setCardType("visa");
    } else if (cleaned.startsWith("5")) {
      setCardType("mastercard");
    } else {
      setCardType(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
      detectCardType(formattedValue);
    } else if (name === "expiryDate") {
      formattedValue = formatExpiryDate(value);
    } else if (name === "cvv") {
      formattedValue = value.slice(0, 3);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.error("Something went wrong, please try again");
    }, 2000);
  };

  return (
    <div className="bg-card border rounded-lg p-6 space-y-6">
      <h2 className="text-xl font-semibold">Payment Information</h2>

      {/* Card Preview */}
      <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white overflow-hidden">
        <div className="absolute top-4 right-4">
          {cardType === "visa" && (
            <img 
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" 
              alt="Visa" 
              className="w-12 h-8 object-contain"
            />
          )}
          {cardType === "mastercard" && (
            <img 
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png" 
              alt="Mastercard" 
              className="w-12 h-8 object-contain"
            />
          )}
          {!cardType && <CreditCard className="w-10 h-10 opacity-50" />}
        </div>
        <div className="mt-12 space-y-6">
          <div className="text-2xl tracking-widest font-mono">
            {formData.cardNumber || "•••• •••• •••• ••••"}
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs opacity-75">Card Holder</div>
              <div className="font-medium">{formData.cardHolder || "YOUR NAME"}</div>
            </div>
            <div>
              <div className="text-xs opacity-75">Expires</div>
              <div className="font-medium">{formData.expiryDate || "MM/YY"}</div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Card Number</label>
          <Input
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
            maxLength={19}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Card Holder Name</label>
          <Input
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Expiry Date</label>
            <Input
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
              maxLength={5}
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1">
              <span className="text-sm font-medium">CVV</span>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </label>
            <Input
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              type="password"
              placeholder="123"
              required
              maxLength={3}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
         
          <div className="flex items-center gap-2">
            <img 
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" 
              alt="Visa" 
              className="w-8 h-5 object-contain"
            />
            <img 
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png" 
              alt="Mastercard" 
              className="w-8 h-5 object-contain"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="mr-2">Processing Payment</span>
              <div className="h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
            </>
          ) : (
            "Pay Now"
          )}
        </Button>
      </form>
    </div>
  );
}