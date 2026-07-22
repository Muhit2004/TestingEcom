import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
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
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();




  const addToCart = async (itemId, size) => {

    if (!size) {
      toast.error('Select a size first', { position: "top-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light", });
      return;
    }

    let cartData = structuredClone(cartItems);


    if (cartData[itemId]) {
      // if the item is already in the cart
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        // if the size is not in the cart, add it
        cartData[itemId][size] = 1;
      }
    } else {
      // if the item is not in the cart, add it
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);

        }
      }
    }
    return totalAmount;
  }




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
    setVisible,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
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
