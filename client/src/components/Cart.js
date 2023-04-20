import React, { useContext } from 'react';

// library
import { FiX } from 'react-icons/fi';

// context
import { CartContext } from '../context/CartContext';

// component
import CartItem from '../components/CartItem';

const Cart = () => {
  const { setIsOpen, cart } = useContext(CartContext);
  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        <div
          onClick={() => setIsOpen(false)}
          className="w-20 h-[90px] flex justify-start items-center cursor-pointer"
        >
          <FiX className="text-4xl" />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        {/* subtotal & total  */}
      </div>
    </div>
  );
};

export default Cart;
