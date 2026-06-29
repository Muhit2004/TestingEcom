import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
const Footer = () => {
  return (
    <div>
      {/* MAIN FOOTER BOX:
        - flex flex-col: Stacks the 3 columns vertically like blocks on mobile phones.
        - sm:grid: Switches into a side-by-side grid once the screen is small-laptop size or bigger.
        - grid-cols-[3fr_1fr_1fr]: Makes 3 columns. The first column gets 3 times more space than the other two.
        - gap-14: Leaves a wide space between the columns so things do not touch.
        - my-10 mt-40: Adds a huge top margin space to push the footer far away from your upper shop items.
      */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* COLUMN 1: BRAND LOGO & ABOUT TEXT */}
        <div>
          {/* mb-5 adds space below the logo image, w-32 fixes its width */}
          <img src={assets.logo} className="mb-5 w-32" alt="" />

          {/* md:w-2/3 keeps the paragraph short and neat on laptop screens instead of stretching across the whole column */}
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* COLUMN 2: COMPANY LINKS */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT INFO */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT SECTION */}
      <div>
        {/* hr draws a light horizontal line across the screen to cleanly separate the bottom text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
