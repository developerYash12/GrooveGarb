import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { toast } from 'react-hot-toast'

export const CartContext = createContext()
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const { token } = useAuth();

    useEffect(()=>{
        const getCart  = async () => {
            try{
                const res = await axios.get("/api/user/cart",{headers:{
                    authorization: token
                }})
                console.log(res);
                const { status, data:{ cart }} = res;
                if(status===200){
                    setCart(cart)
                }
                    
            }
            catch(e){
                console.error(e)
            }
        }
        getCart()
    },[])
    const addToCart = async (product) => {
        try {
            const res = await axios.post("/api/user/cart", { product }, {
                headers: {
                    authorization: token
                }
            })
            console.log(res);
            const { status, data: { cart } } = res;
            if (status === 201) {
                setCart(cart);
                toast.success("Added to cart successfully!");
            }
        }
        catch (e) {
            console.log(e);
            toast.error("Unable to add to cart!");
        }
    }
        const removeFromCart = async (product) => {
        try {
            const res = await axios.delete(`/api/user/cart/${product._id}`, {
                headers: {
                    authorization: token
                }
            })
            console.log(res);
            const { status, data: { cart } } = res;
            if (status === 200) {
                setCart(cart);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const isProductIncart=(product)=> cart.findIndex(({ _id })=> _id === product._id);

    const updateCartQuantity =async(product,actionType)=>{
        try{
            const res = await axios.post(`/api/user/cart/${product._id}`, { action: { type: actionType }},{
                headers: { authorization: token },
            });
            const { status, data:{ cart } } = res;
            console.log(res);
            if(status === 200){
                setCart(cart)
            }    
        }
        catch(e){
            console.error(e)
        }
    }

        return (
            <CartContext.Provider value={{ cart,addToCart,removeFromCart,isProductIncart,updateCartQuantity }}>
                {children}
            </CartContext.Provider>
        )
    }






  