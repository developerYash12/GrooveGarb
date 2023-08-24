export default function ProductReducer(state, { type, payload }) {
    switch (type) {

        case "GET_DATA":
            return {
                ...state,
                products: payload,
            }

        case "GET_CATEGORY":
            return {
                ...state,
                category: payload,
            }

        case "SEARCH_INPUT":
            return {
                ...state,
                inputSearch: payload
            }

        case "RANGE":
            return {
                ...state,
                rangeInput: payload
            }

        case "CHECKBOX_ITEM":
            const isTypePresent = state.checkBox.find(item => item === payload)
            return {
                ...state,
                checkBox: isTypePresent ? state.checkBox.filter(item => item !== payload) : [...state.checkBox, payload]
            }

        case "PRICE_RANGE":
            return {
                ...state,
                price: payload,
            }

        case "SORT":
            return {
                ...state,
                sort: payload,
            }

        case "CLEAR_FILTER":
            return {
                ...state,
                inputSearch: "",
                checkBox: [],
                rangeInput: 0,
                price: [],
                sort: null,
            }

        case "ADD_NEW_ADDRESS":
            return {
                ...state,
                address: [...state?.address, payload]
            };

        case "DELETE_ADDRESS":
            return {
                ...state,
                address: state?.address?.filter(({ id }) => id !== payload),
            };

        case "EDIT_ADDRESS":
            return {
                ...state,
                address: state?.address?.map((addressItem) =>
                    addressItem.id === payload
                        ? { ...addressItem, isEdit: true }
                        : addressItem
                ),
            };

        case "UPDATE_ADDRESS":
            return {
                ...state,
                address: state?.address?.map((addressItem) =>
                    addressItem.id === payload[1]
                        ? { ...payload[0] }
                        : addressItem
                ),
            };

        case "CANCEL_ADDRESS":
            return {
                ...state,
                address: state?.address?.map((addressItem) =>
                    addressItem.id === payload
                        ? { ...addressItem, isEdit: false }
                        : addressItem
                ),
            };

        default:
            return state;
    }

}
