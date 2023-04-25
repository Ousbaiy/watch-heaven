import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// library
import { IoBagCheckOutline } from 'react-icons/io5';
import { runFireworks } from '../lib/utils';

// context
import { CartContext } from '../context/CartContext';

const Success = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.clear();
    setCart([]);
    runFireworks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pt-40 lg:pt-0 h-[600px] flex items-center justify-center text-center">
      <div className="container mx-auto grad w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] rounded-md flex flex-col justify-center items-center gap-y-5 p-2 lg:p-10">
        <span className="text-[40px] text-accent">
          <IoBagCheckOutline />
        </span>
        <h2 className="text-2xl lg:h2">Thank you for your order!</h2>
        <p>Check your email inbox for receipt.</p>
        <p>
          if you have any questions, please email{' '}
          <a
            className="text-accent hover:underline"
            href="mailto:order@example.com"
          >
            order@watchheaven.com
          </a>
        </p>
        <Link to="/" className="btn btn-accent">
          continue shoppping
        </Link>
      </div>
    </div>
  );
};

export default Success;
