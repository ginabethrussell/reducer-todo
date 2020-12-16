import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETE, CLEAR_TODO } from '../actions/todoActions';

const initialState = { todos: [{
    item: 'Learn about reducers',
    completed: false,
    completedBy: '',
    dateCompleted: '',
    id: 3892987589
},
{
    item: 'Set up module project',
    completed: false,
    completedBy: '',
    dateCompleted: '',
    id: 3892987588
},
{
    item: 'Meet with my mentor',
    completed: false,
    completedBy: '',
    dateCompleted: '',
    id: 3892987587
},
{
    item: 'Meet with my mentee',
    completed: false,
    completedBy: '',
    dateCompleted: '',
    id: 3892987586
},
{
    item: 'Submit daily forms',
    completed: false,
    completedBy: '',
    dateCompleted: '',
    id: 3892987585
}
]};

const reducer = (state, action) => {
    // console.log('reducing', state, action.type, action.payload)
    switch (action.type) {
        case(ADD_TODO):
            const newTodo = {
                item: action.payload.item,
                completed: false,
                completedBy: action.payload.date,
                dateCompleted: null,
                id: new Date()
            };
            return {...state, todos: [...state.todos, newTodo]};
        case(DELETE_TODO):
            const deletedState = {...state};
            return {deletedState, todos: deletedState.todos.filter(todo => todo.id !== action.payload)};
        case(TOGGLE_COMPLETE):
            const completedState = {...state};
            return {completedState, todos: completedState.todos.map(item => {
                if(item.id === action.payload) {
                   return {...item, completed: !item.completed, dateCompleted: new Date()}
                };
                return item;
            })};
        case(EDIT_TODO):
            const editedState = {...state};
            if (action.payload.editedItem !== ''){
                return {editedState, todos: editedState.todos.map(item => {
                    if(item.id === action.payload.itemId) {
                       return {...item, item: action.payload.editedItem, completedBy: action.payload.completedBy}
                    };
                    return item;
                })};
            }else {
                return state;
            }
            
        case(CLEAR_TODO):
            const clearedState = {...state};
            return {clearedState, todos: clearedState.todos.filter(item => {
                return !item.completed;
            })};
        default:
          return state
      }
}

export { initialState, reducer };
