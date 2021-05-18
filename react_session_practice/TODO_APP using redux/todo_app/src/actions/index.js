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

    removeItem : payload => {
        return {
            type: actionTypes.delete,
            payload
        }
    },

    completedItem: payload => {
        return {
            type: actionTypes.done,
            payload
        }
    }
}

export default TodoAction;