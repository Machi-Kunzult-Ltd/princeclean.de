"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Show initially after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  // Auto-show tooltip for first-time visitors
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === "undefined") return;

    const hasSeenTooltip = localStorage.getItem("whatsapp-tooltip-seen");

    if (!hasSeenTooltip && isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        localStorage.setItem("whatsapp-tooltip-seen", "true");

        // Auto-hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const whatsappNumber = siteConfig.company.whatsapp.replace(/\s/g, "");
  const whatsappMessage = encodeURIComponent(
    "Hallo PrinceClean, ich möchte gerne einen Termin für eine Teppichreinigung vereinbaren."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="WhatsApp kontaktieren"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Main Button */}
        <div className="relative">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-75"></div>

          {/* Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25d366] rounded-full shadow-lg flex items-center justify-center hover:bg-[#20ba5a] transition-all hover:scale-110 active:scale-95">
            <MessageCircle
              className="w-7 h-7 sm:w-8 sm:h-8 text-white"
              strokeWidth={2}
            />

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 sm:mr-4 top-1/2 -translate-y-1/2 transition-all duration-300 whitespace-nowrap ${
            showTooltip
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          <div className="bg-gray-900 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg shadow-xl relative">
            {/* Close button on mobile */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="sm:hidden absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-xs sm:text-sm font-semibold mb-0.5">
              Jetzt WhatsApp schreiben! 💬
            </div>
            <div className="text-[10px] sm:text-xs text-gray-300">
              Schnelle Antwort garantiert
            </div>

            {/* Arrow pointing to button */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </a>

      {/* Mobile Alternative: Bottom Banner (shows on very small screens) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 sm:hidden transition-all duration-300 ${
          isVisible && !showTooltip ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25d366] text-white py-3 px-4 text-center font-semibold shadow-lg"
        >
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>Jetzt per WhatsApp kontaktieren</span>
          </div>
        </a>
      </div>
    </>
  );
}
