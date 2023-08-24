import {createContext, useEffect, useReducer, useState, useContext} from "react";
import reducerFn from "../reducer/ProductReducer";
import { v4 as uuid } from "uuid";
export const ProductContext = createContext()

const testAddress = [
    {
        id: uuid(),
        userName: "Adarsh Balika",
        street: "107, Vakharia Ind Estate, Ram Mandir, Goregaon (west)",
        city: " Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: 400003,
        mobileNumber: 987654321,
        isEdit:false,
    },
]
export function ProductProvider({children}){
    const [products, setProducts] = useState([])
    const [loading,setLoadaing] = useState(true)

    const initialState ={
        category:[],
        inputSearch:"",
        rangeInput:1,
        checkBox:[],
        price:'',
        sort:null,
        address: testAddress,
    } 
    
    const [state,dispatch] = useReducer(reducerFn, initialState)
    

    useEffect(()=>{
        const getData  = async () => {
       
            try{
                const res = await fetch("/api/products")
                const data = await res.json();     
                    setProducts(data.products)
                    setLoadaing(false)
        
                    
            }
            catch(e){
                console.error(e)
            }
        }
        getData()
    },[products])
    const handleCheckBox=(category)=>{
        dispatch({ type:"CHECKBOX_ITEM", payload:category})
    }
    const handleRangeInput=(e)=>{
        dispatch({ type:"RANGE", payload:e.target.value})
    }
    const handleSearch=(e)=>{
        dispatch({ type:"SEARCH_INPUT", payload:e.target.value})
    }
    const handlePrice=(price)=>{
        dispatch({ type:"PRICE_RANGE", payload:price})
    }
    const rangeFilter = products?.filter(({ rating })=> rating >= state.rangeInput);
    const checkBoxFilter = state.checkBox.length > 0 ? rangeFilter.filter(({ categoryName })=> state.checkBox.some(item=> categoryName.includes(item))) : rangeFilter;
    const clearFilterHandler = ()=>{
        dispatch({ type:"CLEAR_FILTER" })
    }
    

    // const priceRange = state.price ? checkBoxFilter.filter(({price})=> state.price === "Under_20000"? price <= 20000 :state.price === "Under_15000" ? price <= 15000: price <= 10000): checkBoxFilter;
    const priceRange = state.price === "Under_20000" ? checkBoxFilter.filter(({price})=> price <= 20000) : state.price === 'Under_15000'? checkBoxFilter.filter(({price})=> price <= 15000): state.price === 'Under_10000' ? checkBoxFilter.filter(({price})=> price <= 10000): checkBoxFilter;
//     let maxPrice;

// switch (state.price) {
//   case "Under_20000":
//     maxPrice = 20000;
//     break;
//   case "Under_15000":
//     maxPrice = 15000;
//     break;
//   case "Under_10000":
//     maxPrice = 10000;
//     break;
//   default:
//     maxPrice = null
// }
//     const maxPrice =
//   state.price === "Under_20000"
//     ? 20000
//     : state.price === "Under_15000"
//     ? 15000
//     : state.price === "Under_10000"
//     ? 10000
//     : null;
    
    

// const priceRange = maxPrice ? checkBoxFilter.filter(({ price }) => price <= maxPrice) : checkBoxFilter;

    const searchData = state.inputSearch.length > 0 ? priceRange.filter(({ title })=> title.toLowerCase().includes(state.inputSearch.toLowerCase())) : priceRange;
    
 console.log(state.price,priceRange)
    return(
        <ProductContext.Provider value={{clearFilterHandler,searchData,handleSearch,priceRange,handlePrice,products,setProducts, handleCheckBox,dispatch,state,handleRangeInput,rangeFilter,rangeFilter,checkBoxFilter,loading}}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProductData = () =>{ 
    return useContext(ProductContext)
}