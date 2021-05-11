const redux = require('redux');
const fetch = require('isomorphic-fetch')
const createStore = redux.createStore;

const initialState = {
    counter: 0,
    posts: [],
    userInfo: {}
}

const fetchData = async (url) => {
    try {
        
        const data = await fetch(url);
        const finaldata = await data.json()

        return finaldata

    } catch (error) {
        if (error) {
            console.log(error)
        }
    }  
    
}

const reducer =  (state, action) => {

    console.log("Reducer state -->", state);
    console.log("Reducer Action -->", action);

    state = state || initialState;
    if (action.type === "INCREMENT"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === "DECREMENT") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if (action.type === "ADD_POSTS") {
        const data = fetchData(action.url);
        return data.then(d=>{
         state = {
            ...state,
            posts:d
            }
            return state
        })  

    }

    if (action.type === "GET_INFO") {
        const info = fetchData(action.url)
        return info.then(i => {
            state = {
                ...state,
                userInfo:i
            }
            return state
        })
    }

    console.log("Initial state -->", state)

    return state
}

const incrementAction = () => ({
    type:"INCREMENT"
})

const decrementAction = () => ({
    type: "DECREMENT"
})

const addAction = () => ({
    type: "ADD_POSTS",
    url:"http://jsonplaceholder.typicode.com/posts"
})

const addInfo = () => ({
    type:"GET_INFO"
})

const store = createStore(reducer);

store.subscribe(async () => {
    console.log("Listening to the Changes ==> ",await store.getState());
})

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(addAction());

// console.log("FInal State: ", store.getState().posts.then(d=> console.log(d)))