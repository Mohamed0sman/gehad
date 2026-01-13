"use client";

import React, { useEffect } from "react";

interface CalendlyEmbedProps {
  url?: string;
  height?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = "https://calendly.com/gehadashraf", // Replace with your actual Calendly URL
  height = "700px",
}) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="calendly-inline-widget"
        style={{ minWidth: "320px", height: height }}
        data-url={url}
      />
    </div>
  );
};

export default CalendlyEmbed;
