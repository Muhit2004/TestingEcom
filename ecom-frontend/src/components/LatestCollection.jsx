import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  // 1. Grab the master product list from our shared storage box
  const { products } = useContext(ShopContext);

  // 2. THE FIX: Cut the list down to 10 directly! No useState, no useEffect.
  // Whenever the 'products' list updates, this line updates automatically.
  const latestProducts = useMemo(() => products.slice(0, 10), [products]);

  return (
    /* Outer Wrapper Box */
    <div className="my-10">
      {/* SECTION HEADER BLOCK */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum...
        </p>
      </div>

      {/* PRODUCT DISPLAY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          /* 3. Loop through our 10 items and draw a card for each one */
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
