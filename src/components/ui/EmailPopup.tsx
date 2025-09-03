import React, { useState } from "react";
import { X, Mail, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export const EmailPopup: React.FC<EmailPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);
    setIsValid(true);
    
    // Small delay to show loading state
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
      setEmail("");
    }, 500);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isValid && validateEmail(e.target.value)) {
      setIsValid(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-[#0e823e] rounded-full p-2">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#0c0c0c] text-xl">
              Get Started with PI Track
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="[font-family:'Inter',Helvetica] text-[#4d5256] text-base leading-relaxed mb-6">
            Enter your email address to access our qualification questionnaire and see if PI Track is right for your firm.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className={`h-12 text-base border-2 ${
                  !isValid ? "border-red-500" : "border-[#d5d5d5]"
                } rounded-[4px] [font-family:'Inter',Helvetica] px-4 focus:border-[#0e823e] focus:outline-none`}
                required
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-1 [font-family:'Inter',Helvetica]">
                  Please enter a valid email address
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#0e823e] hover:bg-[#0c7236] text-white text-lg [font-family:'Playfair_Display',serif] font-medium rounded-[3px] border border-[#00000021] shadow-[0px_4px_16px_2px_#002c7a33] flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  Continue to Application
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <p className="text-[#60606b] [font-family:'Inter',Helvetica] text-xs text-center mt-4">
            By continuing, you agree to receive communications from My Legal Academy
          </p>
        </div>
      </div>
    </div>
  );
};
