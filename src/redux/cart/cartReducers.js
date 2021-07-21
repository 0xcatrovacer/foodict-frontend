const initialState = {
    numOfItems: 0,
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
                items: [...state.items, action.item],
            };
        default:
            return state;
    }
};

export default cartReducer;
