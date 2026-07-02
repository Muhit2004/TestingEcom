import React, { useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";


/**
 * Navbar Component
 * * Architecture Overview:
 * - Persistent global application header.
 * - Mobile-first responsive design utilizing Tailwind CSS breakpoints.
 * - Pure CSS state tracking ('group' and 'group-hover') to run dropdown animations without JavaScript overhead.
 * - React state-driven dynamic sliding layout engine for rendering target mobile menus.
 */
const Navbar = () => {
  // State hook to govern visibility of the sliding responsive mobile navigation drawer
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (location) {
      console.log(location.pathname);
    }
  }, [location]);


  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* =========================================================================
       1. MAIN APPARATUS WRAPPER
       - Uses Flexbox axis alignment to stack child groups side-by-side.
       - 'justify-between' forces outer components to absolute horizontal opposite parameters.
       - 'py-5' creates uniform structural top/bottom page breathing space metrics.
       ========================================================================= */}

      {/* Brand Identity / Scalable Corporate Vector Asset */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      {/* =========================================================================
       2. DESKTOP VIEWPORT LINK PANEL 
       - 'hidden': Hides standard navigation items on core mobile views to maximize display area. 
       - 'sm:flex': Activates standard row configuration upon hitting the 640px breakpoint. 
       - 'gap-5': Assures constant fluid 20px gaps between discrete routing vectors.
       ========================================================================= */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
        {/* Dynamic NavLink configurations track underlying active routes via React Router */}
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          {/* Target rule 'a.active hr' acts on this item automatically when route properties match */}
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* =========================================================================
       3. ACTIONS AREA & UTILITIES CONTAINER 
       - Aggregates interaction components (Search, Context Menus, Cart shortcuts) into right margin. 
       - Enforces uniform sizes ('w-5') and changes user pointer contexts across image boundaries.
       ========================================================================= */}
      <div
        onClick={() => setShowSearch(true)}
        onDoubleClick={() => setShowSearch(false)}

        className="flex items-center gap-6">
        {/* Site-Wide Search Query Visibility Engine Launcher */}
        {(location.pathname.includes('collection') || location.pathname.includes('product')) && (
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer"
          />
        )}

        {/* =========================================================================
    UNIFIED RESPONSIVE PROFILE DROPDOWN
    - Handles hover effects gracefully on Laptops/Desktops.
    - Handles tap/click triggers perfectly on Mobile/Tablets.
    ========================================================================= */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)} // Desktop: Opens when mouse hovers over the container
          onMouseLeave={() => setDropdownOpen(false)} // Desktop: Closes when mouse moves away
        >
          <img
            onClick={() => setDropdownOpen(!dropdownOpen)} // Mobile: Tapping the icon toggles it open and closed
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer"
          />

          {/* FLOATING CONTEXT PANEL */}
          <div
            className={`${dropdownOpen ? "block" : "hidden"} absolute right-0 pt-4 z-50`}>
            <div
              className={` flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 ${dropdownOpen ? "text-gray-500" : "text-gray-900"} rounded shadow-xl border border-gray-200 `}>
              {/* Clicking any item automatically resets the state to close the menu drawer */}
              <p
                onClick={() => setDropdownOpen(false)}
                className="cursor-pointer hover:text-black whitespace-nowrap">
                My Profile
              </p>
              <p
                onClick={() => setDropdownOpen(false)}
                className="cursor-pointer hover:text-black whitespace-nowrap">
                Orders
              </p>
              <p
                onClick={() => setDropdownOpen(false)}
                className="cursor-pointer hover:text-black whitespace-nowrap">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Global Cart Routing Core Entry point */}
        <Link to="/cart">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer"
          />
        </Link>

        {/* Mobile-Exclusive Menu Switch 
            - 'sm:hidden' drops this button from display pools entirely once screen bounds expand past 640px. */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Open Sidebar"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* =========================================================================
       4. SLIDING MOBILE MENU DRAWER SYSTEM 
       - Uses 'absolute' layout positioning vectors to float overlay completely across view axes. 
       - Template literals check reactive hook states to expand size properties dynamically from 'w-0' to 'w-full'. 
       - Hardware-accelerated 'transition-all' handles animations smooth across rendering passes.
       ========================================================================= */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          {/* Mobile Back Button Action Shell */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer">
            <img
              src={assets.dropdown_icon}
              alt="Dismiss"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/">
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection">
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about">
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
