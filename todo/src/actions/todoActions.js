// Set up dispatch action variables
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
const EDIT_TODO  = 'EDIT_TODO';
const CLEAR_TODO = 'CLEAR_TODO';

export { ADD_TODO, DELETE_TODO, CLEAR_TODO, TOGGLE_COMPLETE, EDIT_TODO };

// Create action creator functions with type and payload
export default {
    addTodo: (newItem, dueDate) => {
        return ({ type: ADD_TODO, payload: { item: newItem, date: dueDate } })
    },
    deleteTodo: (itemId) => {
        return ({ type: DELETE_TODO, payload: itemId })
    },
    toggleComplete: (itemId) => {
        return ({ type: TOGGLE_COMPLETE, payload: itemId })
    },
    editTodo: (itemId, editedItem, dueDate) => {
        return ({ type: EDIT_TODO, payload: {editedItem: editedItem, itemId: itemId, completedBy: dueDate}})
    },
    clearTodo: () => {
        return ({ type: CLEAR_TODO })
    }
}