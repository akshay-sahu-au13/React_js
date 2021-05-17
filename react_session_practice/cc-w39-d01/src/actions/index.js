import {productTypes} from './actionTypes';
const productActions =  {
    productList: (dispatch, getState) => {
        console.log("State: ", getState());
        const path = 'https://fakestoreapi.com/products';

        return fetch(path)
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: productTypes.list,
                        payload: data
                    })
                })
    }
}

export default productActions;