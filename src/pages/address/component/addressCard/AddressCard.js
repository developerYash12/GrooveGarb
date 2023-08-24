import React from 'react'

import "./addressCard.css"
import { useNavigate } from 'react-router-dom';
import { useProductData } from '../../../../Context/ProductContext';

export const AddressCard = () => {
    const { state:{ address }} = useProductData();
    const navigate = useNavigate();
  
  return (
    <div className='address-container'>
      
        <div className='address-list'>
          <hr/>
          <h3 className='address-head'>Select Address</h3>
          {
            address?.map(({ id,userName,street,city,state,country,pincode,mobileNumber})=>(
              <div key={id}>
                <hr/>
                <input type='radio' name='address' className='address-selector' defaultChecked={true}/>
                <span>{userName}</span>
                <p>{street},{city},{state}</p>
                <p>Pincode: {pincode}, {country}</p>
                <p>Mobile No: {mobileNumber}</p>
              </div>
            ))
          }
          <hr/>
          <button className='new-address-btn' onClick={()=> navigate("/address")}>Add New Address</button>
        </div>
      
    </div>
  )
}