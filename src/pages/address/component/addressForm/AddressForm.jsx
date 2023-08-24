import React,{ useState } from 'react'
import './addressForm.css'
import { useProductData } from '../../../../Context/ProductContext';
import { v4 as uuid } from "uuid";
import { toast } from 'react-hot-toast';

export const AddressForm = ({ setShowAddress }) => {

    const { dispatch } = useProductData();

    const [addressForm, setAddressForm] = useState({
        id: uuid(),
        userName: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        mobileNumber: "",
      });

      const handleFormSubmit =(e)=>{
        e.preventDefault();
        dispatch({ type:"ADD_NEW_ADDRESS",payload:addressForm});
        toast.success("Added New Address successfully !");
        setShowAddress(false);
      }

  return (
    <div className='address-form-container'>
        <div className='address-form-card'>
            <h3>Add New Address</h3>
            <form onSubmit={handleFormSubmit} className='address-form'>
                <input
                type="text"
                placeholder="Enter Full Name"
                required
                name="userName"
                value={addressForm.userName}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="text"
                placeholder="Enter House No, Colony,Street"
                required
                name="street"
                value={addressForm.street}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="text"
                placeholder="Enter City"
                required
                name="city"
                value={addressForm.city}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="text"
                placeholder="Enter State"
                required
                name="state"
                value={addressForm.state}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="text"
                placeholder="Enter Country"
                required
                name="country"
                value={addressForm.country}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="number"
                placeholder="Enter ZipCode"
                required
                name="pincode"
                value={addressForm.pincode}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <input
                type="number"
                placeholder="Enter Your Mobile No"
                required
                name="mobileNumber"
                value={addressForm.mobileNumber}
                onChange={(e) =>
                setAddressForm((addressForm) => ({
                    ...addressForm,
                    [e.target.name]: e.target.value,
                }))
                }
                />

                <div className='form-btn'>
                    <button type="submit" className='add-new-address-btn'>Add Address</button>
                    <button className='cancel-btn'
                    onClick={()=> setShowAddress(false)}>Cancel</button>
                </div>

            </form>
        </div>
    </div>
  )
}
