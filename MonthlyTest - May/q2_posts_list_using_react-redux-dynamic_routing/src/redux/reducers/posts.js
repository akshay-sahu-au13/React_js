import { postsType } from "../actionTypes/actionTypes";

const initialState = {
    posts: []
}

const posts = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case postsType.list:
            return {
                posts: [...action.payload]
            }
        default:
            return state
    }
    
}

export default posts;