import actionTypes from './actionTypes';

const TodoAction = {
    todolist: payload => {
        return {
            type:actionTypes.list,
            payload
        }
    },
    enterItem: payload => {
        return {
            type:actionTypes.add,
            payload
        }
    },

    
}

export default TodoAction;