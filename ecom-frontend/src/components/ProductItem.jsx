import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// This component makes a single
//  card for one item, showing its picture, name, and price
const ProductItem = ({ id, image, name, price }) => {
  // Grab the global money symbol ($)
  //  from our shared storage box
  const { currency } = useContext(ShopContext);

  return (
    /* Link: Clicking anywhere on this card takes 
  the user to that product's unique page */
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      {/* Image Box: overflow-hidden stops
       the picture from breaking out of its box when it zooms */}
      <div className="overflow-hidden">
        {/* The Product Image: image[0]
         grabs the very first photo from the item's photo list */}
        <img
          className="hover:scale-110 transition ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product Title text */}
      <p className="pt-3 pb-1 text-sm">{name}</p>
      {/* Product Price: shows the currency symbol followed by the number cost */}
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
