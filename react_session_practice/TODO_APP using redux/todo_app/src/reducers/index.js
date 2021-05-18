import TodoAction from '../actions/';
import todoType from '../actions/actionTypes';

const initialState = {
    todoList:[],
    todoItem:""
};

const reducer = (state, action) => {
    state = state || initialState;

    switch(action.type) {
        case todoType.list:
            console.log("State from reducer::",state)
            const todoList = state.todoList.length ? [...state.todoList, action.payload] : [action.payload]

            return {
                ...state,
                todoList: todoList
            };
        case todoType.add:
            console.log("State from reducer::", state)

            return {
                ...state,
                todoItem:action.payload
            }
        default:
            return state;
    };

};

export default reducer;