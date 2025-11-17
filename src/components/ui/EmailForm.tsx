import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ArrowRight, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
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
  buttonText = "See If You Qualify",
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
          const jotformUrl = `https://form.jotform.com/252374559938069?email=${encodeURIComponent(email)}`;
          window.open(jotformUrl, '_blank');
        } else {
          // For other forms, show success message and redirect with delay
          setIsSubmitted(true);
          setTimeout(() => {
            const jotformUrl = `https://form.jotform.com/252374559938069?email=${encodeURIComponent(email)}`;
            window.open(jotformUrl, '_blank');
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
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-3xl ${className}`}>
      <div className="flex-1 w-full">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={isSubmitting}
          className="h-12 sm:h-14 md:h-16 text-base md:text-lg lg:text-xl border border-[#e0e0e0] bg-white rounded-[8px] [font-family:'Playfair_Display',serif] px-4 md:px-5 py-3 md:py-4 text-[#070513] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#9779fc]/20 focus:border-[#9779fc] shadow-sm transition-all"
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
        className="group h-12 sm:h-14 md:h-16 px-5 sm:px-6 md:px-8 lg:px-10 bg-[#9779fc] hover:bg-[#7d5ef0] disabled:bg-gray-400 text-white text-base sm:text-lg md:text-xl lg:text-2xl [font-family:'Playfair_Display',serif] font-medium rounded-[10px] border-0 shadow-[0_2px_8px_rgba(151,121,252,0.3)] flex items-center gap-2 sm:gap-3 w-full sm:w-auto transition-all whitespace-nowrap"
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:rotate-12 transition-transform" />
        <span>{isSubmitting ? "Submitting..." : buttonText}</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};