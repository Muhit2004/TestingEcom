import React from "react";

// This component makes a reusable heading with a neat
// line next to it (e.g., LATEST COLLECTIONS)
const Title = ({ text1, text2 }) => {
  return (
    /* Outer Box: Puts the text and
     the line next to each other and centers them vertically */
    <div className="inline-flex gap-2 items-center mb-3">
      {/* The Heading Text: text1
         is light grey, text2 is darker and slightly thicker */}
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>

      {/* The Accent Line: Draws a small dark line 
        that gets a bit longer and thicker on laptops */}
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
