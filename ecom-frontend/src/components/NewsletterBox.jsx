import React from "react";

const NewsletterBox = () => {
  // This function runs when the user clicks the "SUBSCRIBE" button
  const onSubmitHandler = (event) => {
    // This stops the web browser from reloading the entire page when the form is submitted
    event.preventDefault();
  };

  return (
    /* Outer Box: Centers all the text and contents inside */
    <div className="text-center">
      {/* Main bold title text */}
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>

      {/* Subtitle grey description text with top spacing (mt-3) */}
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {/* 
        THE INPUT FORM:
        - w-full: Takes full width on mobile phones.
        - sm:w-1/2: Shrinks down to exactly half (50%) width on small laptop/tablet screens and up.
        - flex items-center: Puts the input box and button perfectly side-by-side.
        - mx-auto: Centers the entire form box on the screen.
        - my-6: Adds empty space on the top and bottom.
      */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        {/* Email Input Field: sm:flex-1 forces the input box to stretch out and fill up all leftover space */}
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
