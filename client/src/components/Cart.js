import React, { useContext } from 'react';

// library
import { FiX } from 'react-icons/fi';

// context
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { setIsOpen } = useContext(CartContext)
  return (
    <div className='w-full h-full px-4 text-white'>
      <div
        onClick={() => setIsOpen(false)}
        className="w-20 h-[90px] flex justify-start items-center cursor-pointer"
      >
        <FiX className="text-4xl" />
      </div>
    </div>
  );
};

export default Cart;
