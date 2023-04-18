import React from 'react';
import { useParams } from 'react-router-dom';

// custom hook
import useFetch from '../hooks/useFetch';

// components 
import RelatedProducts from "../components/RelatedProducts"

// context
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams()

  return <div>ProductDetails</div>;
};

export default ProductDetails;
