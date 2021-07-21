const initialState = {
    numOfItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };
        default:
            return state;
    }
};

export default cartReducer;
