export const initialState = {
    basket: [],
    user:null,
}; 


export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


//multiple cases to check if the action is add or remove basket
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER' : 
                return{
                    ...state,           // this return current state
                    user: action.user,
                };

        case 'ADD_TO_BASKET':
            // logic for Adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            // logic for Removing item to basket

            //we cloned the basket
            let newBasket = [...state.basket];

            // We  check to see if product exists in basket,
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0){
                // item exists in the basket, remove it..
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not available`
                    );
            }

            return {
                ...state,
                 basket: newBasket,
                };
            
        default:
            return state;
    }
}

export default reducer;
/*

*/