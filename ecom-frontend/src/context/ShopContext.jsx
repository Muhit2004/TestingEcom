import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";
// 1. CREATE THE CONTEXT CHANNEL
// This initializes the central data tube. Think of it as a broadcast frequency that
// any component in your application can tune into to listen for shared store data.
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

// 2. DEFINE THE DATA PROVIDER COMPONENT
// This component acts as the global distribution factory. It holds all your shared data
// and hands it down to whatever components are nested inside it.

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [visible, setVisible] = useState(false);

  // 3. THE UTILITY WAREHOUSE (VALUE OBJECT)
  // Everything you pack inside this object becomes instantly available to your whole app.
  // Right now we are packing the products database list, currency, and delivery fee.
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    visible,
    setVisible
  };

  return (
    /* =========================================================================
       4. THE BROADCAST TOWER (PROVIDER)
       - ShopContext.Provider: Wraps your app and shoots the 'value' data downward.
       - {props.children}: This represents ALL components tucked inside the provider 
         (like Navbar, Hero, Pages) allowing them to render inside this secure data bubble.
       ========================================================================= */
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
