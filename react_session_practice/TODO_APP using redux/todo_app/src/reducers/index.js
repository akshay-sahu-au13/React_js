import TodoAction from '../actions/';
import actionTypes from '../actions/actionTypes';

const initialState = {
    todoList:[],
    todoItem:""
};

const reducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case actionTypes.list:
            console.log("State from reducer::",state)
            let todoList = state.todoList.length ? [...state.todoList, action.payload] : [action.payload]

            return {
                ...state,
                todoList: todoList
            };
        case actionTypes.add:
            console.log("State from reducer::", state)

            return {
                ...state,
                todoItem:action.payload
            }
        case actionTypes.delete:
             const newList = state.todoList.filter(item=> item !== action.payload)
            return {
                ...state,
                todoList:newList
            }
        case actionTypes.done:
            const doneList = state.todoList.map(item => {
                if(item === action.payload){
                    return item + "  ((***DONE***))"
                } else {
                    return item
                }
            })

            return {
                ...state,
                todoList:doneList
            }

        default:
            return state;
    };

};

export default reducer;