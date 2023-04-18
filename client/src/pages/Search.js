import { useLocation } from 'react-router-dom';

// custom hook
import useFetch from '../hooks/useFetch';

// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  // product based on search
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="mb-[30px] pt-48 lg:pt-5 xl:pt-0">
      <div className="container mx-auto">
        <div className="xl:flex gap-x-[30px]">
          {/* todo: add active sending prop  */}
          <CategoryNav />
          {/* products grid */}
          <div>
            <h2 className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : 'no results found'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
