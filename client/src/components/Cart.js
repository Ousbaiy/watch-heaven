import React, { useContext, useState } from 'react';

// library
import { IoArrowForward, IoClose, IoCartOutline } from 'react-icons/io5';

// context
import { CartContext } from '../context/CartContext';

// component
import CartItem from '../components/CartItem';

// stripe
import { loadStripe } from '@stripe/stripe-js';
import { request } from '../request';

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  const stripePromise = loadStripe(
    'pk_test_51Mzji4HdycjwmCXnrWqV4JEQhNj5DLCSyTJIQQ4HkcBFuSLPacwIHn5ow63V2CH1AsMMAenCGZXPojveef0RhIql006dMKIqzQ'
  );
  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      const res = await request.post('/orders', {
        cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error.message);
      setShowError(true);
      throw new error('Please try later');
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full h-full px-4 text-white flex flex-col gap-y-4">
      <div
        onClick={() => setIsOpen(false)}
        className="w-20 h-[90px] flex justify-start items-center cursor-pointer"
      >
        <IoClose className="text-4xl" />
      </div>
      {cart.length !== 0 ? (
        <>
          <div className="overflow-y-auto overflow-x-hidden flex-1 ">
            <div className="flex flex-col gap-y-10 px-2">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            {/* subtotal & total  */}
          </div>
          {showError && (
            <p className="text-center text-red-500 text-xl ">
              Error: Please try later
            </p>
          )}
          {cart.length >= 1 && (
            <div className="px-2 py-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-lg">Subtotal</p>
                  <p className="text-2xl">Total</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">$ {total}</p>
                  <p className="text-2xl">$ {total}</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-x-4">
                <button
                  className="btn btn-accent hover:bg-accent-hover text-primary"
                  onClick={clearCart}
                >
                  clear cart
                </button>
                <button
                  onClick={handlePayment}
                  className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 disabled:opacity-50 disabled:cursor-no-drop"
                  disabled={isLoading || showError}
                >
                  {isLoading ? 'Processing...' : 'chekout'}{' '}
                  <IoArrowForward className="text-lg" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center text-white/30 -z-10">
          <div className="text-6xl">
            <IoCartOutline />
          </div>
          <div className="text-2xl">cart is empty</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
