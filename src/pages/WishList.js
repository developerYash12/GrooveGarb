

import { useContext } from "react"
import "./cart.css"
import { WishlistContext } from "../Context/WishListContext"
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
export function WishList() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { isProductIncart, addToCart } = useContext(CartContext)
  const { token } = useAuth()
  const navigate = useNavigate()
  const addToCartHandler = (e, product) => {
    e.preventDefault();
    if (token) {
      isProductIncart(product) === -1 ? addToCart(product) : navigate("/Cart");
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      {wishlist.length === 0 &&
        <img src={'https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png'} style={{ width: '70%' }} alt="no item found" />}
      {wishlist.length !== 0 && (
        <div className="product-Cart-container">
          <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr' }}>
            {wishlist?.map((item) => {
              const { _id, title, image, categoryName, price } = item;
              return (
                <div className="product-Cart" style={{ marginTop: '25px' }} key={_id}>
                  <img style={{ width: "40%" }} src={image} alt="shoes" />
                  <h4 className="product-Carttitle">{title}</h4>
                  <p>Price: {price}</p>
                  <p>category: {categoryName}</p>
                  <button onClick={(e) => addToCartHandler(e, item)}>{isProductIncart(item) !== -1 ? "Go To Cart" : "Add to Cart"}</button>
                  <button onClick={() => removeFromWishlist(item)}>Remove</button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>

  )
}

