import React, { useState } from 'react';
import "./editAddress.css"
import { useProductData } from '../../../../Context/ProductContext';
import { toast } from 'react-hot-toast';

export const EditAddress = ({ addressId }) => {

    const { state:{ address }, dispatch } = useProductData();
    const [ editAddress, setEditAddress ] = useState({
        id: addressId,
        userName: address?.find(({ id }) => id === addressId)
        ?.userName,
        street: address?.find(({ id }) => id === addressId)
        ?.street,
        city: address?.find(({ id }) => id === addressId)?.city,
        state: address?.find(({ id }) => id === addressId)?.state,
        country: address?.find(({ id }) => id === addressId)
        ?.country,
        pincode: address?.find(({ id }) => id === addressId)
        ?.pincode,
        mobileNumber: address?.find(({ id }) => id === addressId)
        ?.mobileNumber,
    })
  return (
    <div className="edit-address-container">
      <div className='edit-address-card'>
        <h3>Edit Address</h3>
        <form className='edit-address-form'>
          <input
            placeholder="Enter Full Name"
            type="text"
            required
            name="userName"
            value={editAddress.userName}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter House No., Colony, Street"
            type="text"
            required
            name="street"
            value={editAddress.street}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter City"
            type="text"
            required
            name="city"
            value={editAddress.city}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter State"
            type="text"
            required
            name="state"
            value={editAddress.state}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter Country"
            type="text"
            required
            name="country"
            value={editAddress.country}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter Pincode"
            type="number"
            required
            name="pincode"
            value={editAddress.pincode}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <input
            placeholder="Enter Your Mobile No"
            type="number"
            required
            name="mobileNumber"
            value={editAddress.mobileNumber}
            onChange={(e) =>
              setEditAddress((editAddress) => ({
                ...editAddress,
                [e.target.name]: e.target.value,
              }))
            }
          />

          <div className="form-btn">
            <button
              type="submit"
              className="save-btn"
              onClick={() => {
                dispatch({
                  type: "UPDATE_ADDRESS",
                  payload: [editAddress, addressId],
                });
                toast.success("The address is updated successfully!");
              }}
            >
              Save
            </button>
            <button
              type="submit"
              onClick={() => {
                dispatch({
                  type: "CANCEL_ADDRESS",
                  payload: addressId,
                });
              }}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}