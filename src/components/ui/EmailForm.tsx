import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { EmailService } from "../../services/EmailService";

interface EmailFormProps {
  onSubmit?: (email: string) => void;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  source?: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({
  onSubmit,
  buttonText = "See If You Qualify Now",
  placeholder = "Enter Your Email Address",
  className = "",
  source = "hero-form",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to backend API
      const result = await EmailService.submitEmail(email, source);
      
      if (result.success) {
        onSubmit?.(email);
        
        // For hero form, redirect immediately without delay or success message
        if (source === "hero-form") {
          window.open('https://form.jotform.com/252374559938069', '_blank');
        } else {
          // For other forms, show success message and redirect with delay
          setIsSubmitted(true);
          setTimeout(() => {
            window.open('https://form.jotform.com/252374559938069', '_blank');
          }, 1000);
          setTimeout(() => setIsSubmitted(false), 3000);
        }
      } else {
        setError(result.message || "Failed to submit email");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Email submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`flex items-center justify-center gap-2 p-4 bg-green-50 rounded-lg ${className}`}>
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span className="text-green-700 font-medium">Thank you! We'll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl ${className}`}>
      <div className="flex-1 w-full">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={isSubmitting}
          className="h-14 md:h-16 lg:h-18 text-base md:text-lg lg:text-xl border-2 border-[#d5d5d5] rounded-[4px] [font-family:'Inter',Helvetica] px-3 md:px-4"
        />
        {error && (
          <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
      </div>
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="h-14 md:h-16 lg:h-18 px-6 md:px-10 lg:px-12 bg-[#0e823e] hover:bg-[#0c7236] disabled:bg-gray-400 text-white text-lg md:text-xl lg:text-2xl [font-family:'Playfair_Display',serif] font-medium rounded-[3px] border border-[#00000021] shadow-[0px_4px_16px_2px_#002c7a33] flex items-center gap-2 md:gap-3 w-full sm:w-auto"
      >
        {isSubmitting ? "Submitting..." : buttonText}
        <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
      </Button>
    </form>
  );
};