import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

/**
 * Hero Section Component
 * -------------------------------------------------------------------------
 * Architecture Blueprint:
 * - Employs a split-screen viewport design framework (50% text layout / 50% showcase graphic).
 * - Utilizes mobile-first layout flex axes shifts (`flex-col` upgrading to `sm:flex-row`).
 * - Applies typography styles combining utility tracking (`outfit`) and luxury serifs (`prata-regular`).
 */
const Hero = () => {
  return (
    /* =========================================================================
       1. SPLIT MATRIX CONTAINER WRAPPER
       - 'flex-col': Arranges child columns vertically by default on standard mobile screens.
       - 'sm:flex-row': Rotates flex alignments into a clean horizontal side-by-side row at 640px.
       - 'border border-gray-400': Outlines the component box boundaries uniformly.
       ========================================================================= */
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* =========================================================================
         2. HERO LEFT COMPONENT PANEL (Text Engine & Navigation Triggers)
         - 'w-full sm:w-1/2': Matches width exactly to half of the container area on desktops.
         - 'flex items-center justify-center': Centers text layouts perfectly inside the inner box coordinates.
         - 'py-10 sm:py-0': Adds vertical space boundaries on tiny mobile viewports to avoid crushing content.
         ========================================================================= */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        {/* Core Content Layout Block */}
        <div className="text-[#414141]">
          {/* Subsection Tier: Branding Indicator Block */}
          <div className="flex items-center gap-2">
            {/* Structural Line Divider Accent */}
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            {/* Core Label Text */}
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>

          {/* Core Focal Point Heading: Luxury Typography Frame */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST ARRIVALS
          </h1>

          {/* Action Trigger Block: Call To Action (CTA) Interface */}
          <div className="flex items-center gap-2">
            {/* Interactive Prompt Text */}
            <p className="font-semibold text-sm md:text-base cursor-pointer">
              SHOP NOW
            </p>
            {/* Balancing Line Divider Accent */}
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* =========================================================================
         3. HERO RIGHT COMPONENT PANEL (High-Definition Product Graphics showcase)
         - 'w-full sm:w-1/2': Consumes remaining half of available viewport row matrices.
         ========================================================================= */}
      <img
        src={assets.hero_img}
        alt="Hero Showcase Collection Image Layout"
        className="w-full sm:w-1/2"
      />
    </div>
  );
};

export default Hero;
