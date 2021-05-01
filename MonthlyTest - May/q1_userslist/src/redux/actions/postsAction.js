import { postsType } from "../actionTypes/actionTypes";

const postsAction = {
    postsList: (dispatch,getState) => {
        // console.log(getState)

        const path = 'https://jsonplaceholder.typicode.com/users';

        return fetch(path)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: postsType.list,
                    payload: data
                });
            });
    }
}

export default postsAction;