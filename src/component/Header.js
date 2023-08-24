import "./header.css"
import { useContext } from "react"
import {Link,NavLink} from "react-router-dom"
import { WishlistContext } from "../Context/WishListContext"
import { useAuth } from "../Context/AuthContext"
import {FiLogOut} from 'react-icons/fi'
import { CartContext } from "../Context/CartContext"
import { ProductContext } from "../Context/ProductContext"
export function Header(){
    const { products,handleSearch } = useContext(ProductContext)
    const { cart } = useContext(CartContext)
    const { wishlist } = useContext(WishlistContext)
    const { loading } = useContext(ProductContext)
    const {logoutHandler , token} = useAuth();
    return(
        <>
          <div className="header">
                <Link to="/" className="logo">GrooveGarb</Link>
                <input className="input" onChange={handleSearch}placeholder="Search product hear..." />
                <div className="header-right">
                    <Link className="active" to="./Login">Login</Link>
                    <Link to="/WishList">Wishlist {wishlist?.length === 0 ? "": wishlist?.length}</Link>
                    <Link to="/Cart">Cart {cart?.length === 0 ? "": cart?.length} </Link>
                    <Link to={token ? "/" : "/login"}  onClick={token && logoutHandler}><FiLogOut/></Link>
                   
                </div>
            </div>
            <div>
                <h1>{loading}</h1>
            </div>
        </>
    )
}