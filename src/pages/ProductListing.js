import { useContext } from "react";
import "./productListing.css";
import "./Footer";
import { WishlistContext } from "../Context/WishListContext";
import { useAuth } from "../Context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { ProductContext, useProductData } from "../Context/ProductContext";
import Footer from "./Footer";


export function ProductListing() {
  const { searchData, handlePrice,loading } = useContext(ProductContext);
  const { state: { rangeInput, checkBox, price }, clearFilterHandler, handleCheckBox, handleRangeInput } = useProductData();
  const { isProductIncart, addToCart } = useContext(CartContext)
  const { isProductInWishlist, addToWishlist } = useContext(WishlistContext)
  const { token } = useAuth();
  const navigate = useNavigate();



  const addToCartHandler = (e, product) => {
    e.preventDefault();
    if (token) {
      isProductIncart(product) === -1 ? addToCart(product) : navigate("/Cart");
    } else {
      navigate("/login");
    }
  }

  const wishlistHandler = (e, product) => {
    e.preventDefault();
    if (token) {
      isProductInWishlist(product) === -1 ? addToWishlist(product) : navigate("/Wishlist");
    } else {
      navigate("/login");
    }
  };
 const myGif = 'https://i.gifer.com/ZKZg.gif'

  return (
    <>
     <img className='loading-img' src={loading && myGif } />
    <div className="product-listing-container">
      <div className="filter-box">
        <div>
          <h2 className='aside-filter-heading'>Filter</h2>
          <button className='aside-filter-reset' onClick={clearFilterHandler}>Clear</button>
        </div>
        <div>
          <h2>Rating  </h2>
          <p className='filter-range'>
            <span>1★ | |</span>
            <span>3★ | |</span>
            <span>5★ </span>
          </p>
          <input style={{width: '60%'}}value={rangeInput}
            onChange={handleRangeInput}
            type="range"
            min="1"
            max="5"
            className='slider-input' />
        </div><hr />
        <h2>PRICE</h2>
        <div className="filter-options">
          <label id="label">
            <input type="radio" name="category" checked={price?.includes('Under_20000')} onChange={() => handlePrice('Under_20000')} value="men" /> Under ₹  20000.00
          </label>
          <label id="label">
            <input type="radio" name="category" checked={price?.includes('Under_15000')} onChange={() => handlePrice('Under_15000')} value="women" /> Under ₹ 15000.00
          </label>
          <label id="label">
            <input type="radio" name="category" checked={price?.includes('Under_10000')} onChange={() => handlePrice('Under_10000')} value="kids" /> Under ₹ 10000.00
          </label>
        </div><hr />
        <div className="filter-options">
          <h2>Category</h2>
          <label id="label">
            <input type="checkbox" name="category" value="men" checked={checkBox?.includes('Men')} onChange={() => handleCheckBox('Men')} /> Men
          </label>
          <label id="label">
            <input type="checkbox" name="category" value="women" checked={checkBox?.includes('Women')} onChange={() => handleCheckBox('Women')} />Women
          </label>
          <label id="label">
            <input type="checkbox" name="category" value="kids" checked={checkBox?.includes('Kids')} onChange={() => handleCheckBox('Kids')} />Kid's
          </label>
        </div>

      </div>

      <div className="product-Listing">
      
        {searchData.map((item) => {
          const { _id, title, image, categoryName, price } = item
          return (
            <div className="product-ListingItem" key={_id}>
              <img className="product-image" src={image} alt="shoes" />
              <h4 className="product-ListingTitle">{title}</h4>
              <p>Price: Rs- {price} /-</p>
              <p>Category: {categoryName}</p>
              <button onClick={(e) => addToCartHandler(e, item)}>{isProductIncart(item) !== -1 ? "Go To Cart" : "Add to Cart"}</button>
              <button onClick={(e) => wishlistHandler(e, item)}>{isProductInWishlist(item) !== -1 ? "Go to Wishlist" : "Add to WishList"}</button>
            </div>
          )
        })
        }
        <Footer />

      </div>
    </div>

</>
  );
}
