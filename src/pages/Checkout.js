import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import './Checkout.css'

import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { AddressCard } from './address/component/addressCard/AddressCard';

export const Checkout = () => {
  const { cart, } = useContext(CartContext);
  const navigate = useNavigate();

  const currPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const discountPrice = 1199;
  const totalPrice = currPrice - discountPrice

  const orderBtnHandler = () => {
    if (cart?.length === 0) {
      toast.error("Cart Is Empty")
      navigate("/")
      console.log(" Order Placed")
    }
    else {
      toast.success("Order placed successfully!");
      // removeAllCartProduct();
      navigate("/");
    }
  }

  return (
    <div>
      <h2 className='checkout-top'>Checkout</h2>
      <div className='checkout-card' style={{ display: "flex" }}>
        <AddressCard />
        <div className='checkout-summary'>
          <div className='checkout-details'>
            <h3 className='checkout-head'>Order Summary</h3>
            <hr />

            <div>
              {
                cart.map(({ id, title, qty }) => (
                  <div key={id}>
                    <div>
                      <p className='right'>Quantity : {qty} </p>
                      <p className='left'>Item : {title} </p>
                    </div>

                  </div>
                ))
              }
            </div>
            <div>
              <h3>Price Details</h3>
              <hr />

              <div>
                <p className='left'>Total Price</p>
                <p className='right'> ₹ {currPrice}</p>
              </div>

              <div>
                <p className='left'>Total Discount</p>
                <p className='right'> ₹ {discountPrice}</p>
              </div>

              <div>
                <hr />
                <p className='left'>Total Amount</p>
                <p className='right'> ₹ {totalPrice} </p>
              </div>

            </div>
            <hr />
            <p className='discount-msg'>You will save ₹ {discountPrice} on this order!</p>
            <button className='order-btn' onClick={() => orderBtnHandler()}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}