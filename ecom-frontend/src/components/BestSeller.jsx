import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  // 1. Grab the master product list from our shared storage box
  const { products } = useContext(ShopContext);

  // 2. THE CLEAN FIX: Filter and cut the list down to 5 items directly!
  // This looks through your items, keeps only the ones marked as bestseller, and grabs the top 5.
  const bestSeller = products.filter((item) => item.bestseller).slice(0, 5);

  return (
    /* Outer Wrapper Box: Adds top and bottom spacing */
    <div className="my-10">
      {/* SECTION HEADER BLOCK */}
      <div className="text-center py-8 text-3xl">
        {/* Our custom Title heading block */}
        <Title text1={"BEST"} text2={"SELLERS"} />
        {/* Small subtitle text description */}
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>

      {/* BEST SELLERS DISPLAY GRID */}
      {/* This grid shows 2 
      items on phones, scaling up to 5 items on big desktop screens */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {/* 3. Loop through our 5 best seller items and draw a card for each one
         */}
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
