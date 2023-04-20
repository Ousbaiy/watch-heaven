import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // cart amount
  useEffect(() => {
    const amount = cart.reduce((acc, cur) => {
      return acc + cur.amount;
    }, 0);

    setItemsAmount(amount);
  }, [cart]);

  // add to card
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item[0], amount: 1 };

    // check if item already in cart
    const cartItem = cart.find((item) => {
      return item.id === itemID;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    // open cart sidebar
    setIsOpen(true);
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // input in cart
  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    // find in cart by id
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value) || value === 0) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newItem);
    }
    setIsOpen(true);
  };

  // select in cart
  const handleSelect = (e, id) => {
    const value = parseInt(e.target.value);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newItem = [...cart].map((item) => {
        if (item.id === id) {
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newItem);
    }
    setIsOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        clearCart,
        itemsAmount,
        handleInput,
        handleSelect,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
