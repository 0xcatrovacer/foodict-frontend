const initialState = {
    numOfItems: 0,
    items: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
                items: [...state.items, action.item],
                totalPrice: state.totalPrice + action.item.price,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
                items: state.items.filter((item) => item !== action.item),
                totalPrice: state.totalPrice - action.item.price,
            };
        case "EMPTY_CART":
            return {
                ...state,
                numOfItems: (state.numOfItems = 0),
                items: (state.items = []),
                totalPrice: (state.totalPrice = 0),
            };
        default:
            return state;
    }
};

export default cartReducer;
