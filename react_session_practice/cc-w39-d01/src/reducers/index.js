import {productTypes} from '../actions/actionTypes';

const initialState = []

const reducer = (state, action) => {
     state = state || initialState;

     switch(action.type) {
         case productTypes.list:
             return [...action.payload]
         default:
             return state;
     }
}


export default reducer;
