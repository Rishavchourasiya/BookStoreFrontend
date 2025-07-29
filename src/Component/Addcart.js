import React, { useEffect, useState } from 'react';

const Addcart = ({ cart, setcart }) => {
  const [price, setPrice] = useState(0);

  // Update price total
  const handleprice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  // Increment quantity
  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setcart(updatedCart);
  };

  // Decrement quantity
  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    );
    setcart(updatedCart);
  };

  // Remove item
  const Remove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setcart(arr);
  };

  useEffect(() => {
    handleprice();
  }, [cart]);

  return (
    <article>
      {cart.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src={item.img} alt='image error' />
            <p>{item.title}</p>
          </div>
          <div className='cart_button'>
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <span>{item.amount}</span>
            <button onClick={() => handleDecrement(item.id)}>-</button>
          </div>
          <div>
            <span>Rs {item.price}</span>
            <button onClick={() => Remove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {/* Total cart amount outside the loop */}
      <div className='cart_total'>
        <h2>Total Amount: Rs {price}</h2>
      </div>
    </article>
  );
};

export default Addcart;
