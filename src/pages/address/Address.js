import React, { useState } from 'react'

import { EditAddress } from './component/editAddress/EditAddress';
import { AddressForm } from './component/addressForm/AddressForm';
import { toast } from 'react-hot-toast';
import "./address.css"
import { useProductData } from '../../Context/ProductContext';

export const Address = () => {
    const { state:{ address }, dispatch } = useProductData();
    const [ showAddress, setShowAddress ] = useState(false);

  return (
    <div className="address-details">
        {address?.length === 0 && <h3>No Address Found!</h3>}
        {address?.map(
            ({
                id,
                userName,
                street,
                city,
                state,
                country,
                pincode,
                mobileNumber,
                isEdit,
            }) =>(
                <div key={id}>
                    <h3>{userName}</h3>
                    <p>
                        {street}, {city}, {state}
                    </p>
                    <p>
                        Pincode: {pincode}, {country}
                    </p>
                    <p>Mobile Number: {mobileNumber}</p>

                    {isEdit && <EditAddress addressId={id} />}

                    <button
                        className="delete-address-btn"
                        onClick={() =>
                        dispatch({ type: "EDIT_ADDRESS", payload: id })
                        }
                    >
                        Edit Address
                    </button>
                    <button
                        className="delete-address-btn"
                        onClick={() => {
                        dispatch({
                            type: "DELETE_ADDRESS",
                            payload: id,
                        });
                        toast.success("Address Deleted successfully!");
                        }}
                    >
                        Delete
                    </button>
                    <hr />
                </div>
            )
        )}

        <button className="add-address-btn" onClick={() => setShowAddress(true)}>
             Add New Address
        </button>

        {showAddress && <AddressForm setShowAddress={setShowAddress}/>}
    </div>
  )
}