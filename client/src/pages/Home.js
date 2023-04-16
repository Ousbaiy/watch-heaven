// custom hooks
import useFetch from '../hooks/useFetch.js';

// Components
import ProductSlider from '../components/ProductSlider.js';

const Home = () => {
  // get new products
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');

  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default Home;
