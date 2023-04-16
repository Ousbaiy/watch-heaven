import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Link>
      <div className='grad w-fill h-[360px] rounded-[8px] overflow-hidden relative flex items-center justify-center group'>
        {/* badge */}
        {product.attributes.isNew ? (
          <div className='absolute top-4 right-4 bg-accent text-primary text-[12px] font-extrabold uppercase px-2 rounded-full z-10'>new</div>
        ) : null}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            className="w-[160px] h-[160px] object-contain group-hover:scale-90 transition-all "
            alt={product.title}
          />
        </div>
      </div>
    </Link>
  );
};

export default Product;
