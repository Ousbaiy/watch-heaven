import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// library
import { FiX } from 'react-icons/fi';

// components
import Qty from '../components/Qty';

// context
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)

  return (
    <div className="flex gap-x-8">
      <Link
        to={`product/${item.id}`}
        className="w-[70px] h-[70px] object-contain"
      >
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt={item.attributes.title}
        />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex justify-between mb-3 hover:underline">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div className="cursor-pointer text-[24px] hover:text-accent transition-all" onClick={() => removeFromCart(item.id)}>
            <FiX />
          </div>
        </div>
        {/* quantity  */}
        <div className="flex items-center justify-between">
          <div>
            <Qty item={item} />
            <div className="text-accent mt-1">
              $ {item.attributes.price} per piece
            </div>
          </div>
          <div className="text-accent text-xl">
            $ {(item.attributes.price * item.amount).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
