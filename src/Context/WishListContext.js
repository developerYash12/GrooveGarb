import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { toast } from 'react-hot-toast';

 export const WishlistContext = createContext()
 export function WishlistProvider({children}){
    const [wishlist, setWishlist] = useState([])
    const { token } = useAuth();

    useEffect(()=>{
        const getWishlist  = async () => {
            try{
                const res = await axios.get("/api/user/wishlist",{headers:{
                    authorization: token
                }})
                console.log(res);
                const { status, data:{ wishlist }} = res;
                if(status===200){
                    setWishlist(wishlist);
                }
                    
            }
            catch(e){
                console.error(e)
            }
        }
        getWishlist()
    },[])

    const addToWishlist = async(product)=>{
        try{
            const res = await axios.post("/api/user/wishlist",{product},{headers:{
                authorization: token
            }})
            console.log(res);
            const { status, data:{ wishlist }} = res;
            if(status===201){
                setWishlist(wishlist);
                toast.success("Added to WishList successfully!")
            }
            else{
                toast.error("Unable to add to WishList!");
            }
        }
        catch(e){
            console.log(e);
        }
    }

    const removeFromWishlist = async(product)=>{
        try{
            const res = await axios.delete(`/api/user/wishlist/${product._id}`,{headers:{
                authorization: token
            }})
            console.log(res);
            const { status, data:{ wishlist }} = res;
            if(status===200){
                setWishlist(wishlist);

            }
        }
        catch(e){
            console.log(e);
        }
    }

    const isProductInWishlist=(product)=> wishlist.findIndex(({ _id })=> _id === product._id);
    
    return(
        <WishlistContext.Provider value={{wishlist, addToWishlist,removeFromWishlist,isProductInWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
 }
