import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarPopup: React.FC<CalendarPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load the calendar embed script when popup opens (only once)
    if (isOpen && !scriptLoaded.current) {
      const existingScript = document.querySelector('script[src="https://link.legalfunnel.com/js/form_embed.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://link.legalfunnel.com/js/form_embed.js';
        script.type = 'text/javascript';
        script.async = true;
        document.body.appendChild(script);
        scriptLoaded.current = true;
      } else {
        scriptLoaded.current = true;
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[12px] shadow-2xl max-w-4xl w-full mx-4 transform transition-all max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
          <h3 className="[font-family:'Playfair_Display',serif] font-medium text-[#070513] text-xl sm:text-2xl">
            Schedule a Call with Our Team
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Calendar Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <iframe 
            src="https://link.legalfunnel.com/widget/booking/a0FUteXRRZbUkD2Fxb7f" 
            style={{
              width: '100%',
              height: '700px',
              minHeight: '700px',
              border: 'none',
              overflow: 'hidden'
            }} 
            scrolling="no" 
            id="fgVPRZqedVRP0HEiR9el_1763340035091"
            title="Schedule a Call"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

