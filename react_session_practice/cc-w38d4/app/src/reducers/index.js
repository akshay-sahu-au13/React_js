import productAction from '../actions/index'
const initialState = [];

const reducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case productAction().type:
            return [...action.payload]

        default:
            return state
    }

}

export default reducer ;