import { Link } from 'react-router-dom';

// custom hook
import useFetch from '../hooks/useFetch.js';

const CategoryNav = () => {
  const { data } = useFetch('/categories');

  return (
    <aside className="hidden xl:flex">
      <div className="grad dark:grad-dark flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden shadow-md">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category) => (
            <Link
              to={`/products/${category.id}`}
              className="cursor-pointer uppercase hover:text-accent-hover transition-all"
              key={category.id}
            >
              {category.attributes.title}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
