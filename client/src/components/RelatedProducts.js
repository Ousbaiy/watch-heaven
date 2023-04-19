import React from 'react';

// custom hook
import useFetch from '../hooks/useFetch';

// components 
import ProductSlider from './ProductSlider';



const RelatedProducts = ({ categoryTitle }) => {
  const { data } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`)

  return <div className='mb-16'>
    <div className="container mx-auto">
      <h3 className='h2 mb-6 text-center lg:text-left'>Related Products</h3>
      <ProductSlider data={data} />
    </div>
  </div>;
};

export default RelatedProducts;
