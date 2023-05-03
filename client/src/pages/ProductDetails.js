import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// custom hook
import useFetch from '../hooks/useFetch';

// components
import RelatedProducts from '../components/RelatedProducts';

// context
import { CartContext } from '../context/CartContext';

// loader
import { SpinnerInfinity } from 'spinners-react';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // get product by id
  const { data } = useFetch(`products?populate=*&filters[id][$eq]=${id}`);
  if (!data)
    return (
      <div className="container mx-auto h-[500px]">
        <div className="h-screen fixed inset-0 bg-black/70 z-40 flex items-center justify-center">
          <SpinnerInfinity color="white" />
        </div>
        ;
      </div>
    );
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className="mb-16 pt-48 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 h-[540px] grad dark:grad-dark rounded-lg flex justify-center items-center py-10 lg:py-0">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt={data[0].attributes.title}
              className="h-[250px] w-[250px] object-contain"
            />
          </div>
          <div className="flex-1 bg-white dark:bg-primary p-8 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* cat title  */}
            <p className="text-accent uppercase text-lg font-medium mb-2">
              {categoryTitle} watches
            </p>
            {/* title  */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            <p className="mb-12">{data[0].attributes.description}</p>
            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <p className="text-accent text-xl lg:text-3xl font-semibold">
                ${data[0].attributes.price}
              </p>
              <button
                onClick={() => addToCart(data, id)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related Prod  */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
