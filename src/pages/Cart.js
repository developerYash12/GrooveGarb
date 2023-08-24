import { useContext } from "react"
import "./cart.css"
import "./Footer"
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishListContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const updateCartHandler = (e, product, actionType) => {
    e.preventDefault();
    updateCartQuantity(product, actionType)
  }

  const navigate = useNavigate();

  const currPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const discountPrice = 1199;
  const totalPrice = currPrice - discountPrice

  console.log(currPrice, totalPrice);
  console.log(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0).toFixed(2))


  return (
    <div className="cart-item-container">
      {cart.length === 0 && <img src={'https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png'} style={{ paddingLeft: '27%', width: "126%" }} alt="No-productJPG" />

      }
      {cart.length !== 0 && (
        <div className="product-Cart-container">
          <div className="cart-container">
            {cart?.map((item) => {
              const { _id, title, image, categoryName, price, qty } = item;
              return (
                <div className="product-Cart" style={{ marginTop: '25px' }} key={_id}>
                  <img style={{ width: "40%" }} src={image} alt="shoes" />
                  <h4 className="product-Carttitle">{title}</h4>
                  <p>Price: {price}</p>
                  <p>category: {categoryName}</p>
                  <p className='cart-quantity'>Quantity:
                    <button className='update-cart-qty'
                      disabled={qty === 1}
                      onClick={(e) => updateCartHandler(e, item, "decrement")}><AiOutlineMinus /> </button>
                    <span> {qty}</span>
                    <button className='update-cart-qty'
                      onClick={(e) => updateCartHandler(e, item, "increment")}><AiOutlinePlus /></button>
                  </p>
                  <button onClick={() => addToWishlist(item)}>Add to Wishlist</button>
                  <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {
        cart.length > 0 && (
          <div className='cart-price-card'>
            <h3>Price Details</h3>
            <hr />
            <p>
              <span>Price</span>
              <span className='right'> ₹ {currPrice}</span>
            </p>
            <p>
              <span>Discount</span>
              <span className='right'> ₹ {discountPrice}</span>
            </p>
            <hr />
            <p>
              <span>Total</span>
              <span className='right'> ₹ {totalPrice}</span>
            </p>
            <hr />
            <p className='discount-msg'>You will save  ₹ {discountPrice} on this order!</p>
            <button className='checkout-btn' onClick={() => navigate("/checkout")}>CheckOut</button>
          </div>
        )
      }

    </div>


  )
}

