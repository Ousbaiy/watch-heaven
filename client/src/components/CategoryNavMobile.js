import React from 'react';

// library
import { FiX } from 'react-icons/fi';

// custom hook
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories');

  return (
    <div className="w-full h-full bg-white dark:bg-primary p-8">
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className='flex flex-col gap-y-8 '>
        {data?.map((category) => (
          <Link
          to={`/products/${category.id}`}
          className="cursor-pointer uppercase font-medium  hover:text-accent-hover transition-all"
          onClick={() => setCatNavMobile(false)}
          key={category.id}
        >
          {category.attributes.title}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
