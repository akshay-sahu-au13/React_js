import productAction from '../actions/index'
const initialState = [];

const reducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case productAction.productList().type:
            console.log("Action type from fn call",action.type)
            console.log("Action type:::", productAction.productList().type)
            console.log("Action Payload:::", action.payload)
            return [...action.payload]

        default:
            return state
    }

}

export default reducer ;