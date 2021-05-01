import { postDetailsType } from "../actionTypes/actionTypes";

const postDetailsAction = {
    postInfo: (id) => (dispatch,getState) => {
        console.log(getState)

        const path = `https://jsonplaceholder.typicode.com/posts/${id}`;

        return fetch(path)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: postDetailsType.postInfo,
                    payload: data
                });
            });
    }
}

export default postDetailsAction;