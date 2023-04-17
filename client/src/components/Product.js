import { Link } from 'react-router-dom';

const Product = ({ product }) => {

  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-fill h-[360px] rounded-[8px] overflow-hidden relative group">
        {/* badge */}
        {product.attributes.isNew && (
          <div className="absolute top-4 right-4 bg-accent text-primary text-[12px] font-extrabold uppercase px-2 rounded-full z-10">
            new
          </div>
        )}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            className="w-[160px] h-[160px] object-contain group-hover:scale-110 duration-150 ease-out transition-all "
            alt={product.title}
          />
        </div>
        {/* text  */}
        <div className='px-6 pb-8 flex flex-col h-[150px]'>
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          <div className="text-[15px">
            {product.attributes.title.substring(0, 35)}...
          </div>
          <div className='text-lg text-accent mt-auto'>${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
