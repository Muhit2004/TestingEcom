import React, { useContext, useMemo } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'
import { Link } from 'react-router-dom'

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);

    // THE FIX: Use useMemo instead of useState + useEffect
    const related = useMemo(() => {
        if (products.length === 0) return [];

        let pipeline = products.slice();
        pipeline = pipeline.filter((item) => item.category === category);
        pipeline = pipeline.filter((item) => item.subCategory === subCategory);

        return pipeline.slice(0, 5);
    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className=' text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts;