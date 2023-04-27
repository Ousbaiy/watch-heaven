import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// custom hook
import useFetch from '../hooks/useFetch';

// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    } 
  }, [data])

  return (
    <div className="mb-16 pt-48 lg:pt-0">
      <div className="container mx-auto">
        <div className="lg:flex gap-x-[30px]">
          <CategoryNav />
          <main>
            {/* title  */}
            <h2 className='py-3 text-xl uppercase text-center lg:text-left'>{title} watches</h2>
            {/* grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
