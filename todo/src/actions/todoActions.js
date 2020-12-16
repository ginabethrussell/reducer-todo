const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const EDIT_TODO  = 'EDIT_TODO';
const CLEAR_TODO = 'CLEAR_TODO';

export { ADD_TODO, DELETE_TODO, CLEAR_TODO, COMPLETE_TODO, EDIT_TODO };

export default {
    addTodo: (newItem) => {
        return ({ type: ADD_TODO, payload: newItem })
    },
    deleteTodo: (itemId) => {
        return ({ type: DELETE_TODO, payload: itemId })
    },
    completeTodo: (itemId) => {
        return ({ type: COMPLETE_TODO, payload: itemId })
    },
    editTodo: (editedItem, itemId) => {
        return ({ type: EDIT_TODO, payload: {editedItem: editedItem, itemId: itemId}})
    },
    clearTodo: () => {
        return ({ type: CLEAR_TODO })
    }
}