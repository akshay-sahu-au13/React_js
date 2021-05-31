import { postsType } from "../actionTypes/actionTypes";

const postsAction = {
    postsList: (dispatch,getState) => {
        console.log(getState)

        const path = 'https://jsonplaceholder.typicode.com/posts';

        return fetch(path)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: postsType.list,
                    payload: data
                });
            });
    }
}

export default postsAction;