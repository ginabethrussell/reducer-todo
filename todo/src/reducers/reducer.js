import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, CLEAR_TODO } from '../actions/todoActions';

const initialState = { todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Set up module project',
    completed: false,
    id: 3892987588
},
{
    item: 'Meet with my mentor',
    completed: false,
    id: 3892987587
},
{
    item: 'Meet with my mentee',
    completed: false,
    id: 3892987586
},
{
    item: 'Submit daily forms',
    completed: false,
    id: 3892987585
}
]};

const reducer = (state, action) => {
    console.log('reducing', state, action.type, action.payload)
    switch (action.type) {
        case(ADD_TODO):
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {...state, todos: [...state.todos, newTodo]};

        case(DELETE_TODO):
            const newState = {...state};
            return {newState, todos: newState.todos.filter(todo => todo.id !== action.payload)};

        case(COMPLETE_TODO):
            return state.todos.map(item => {
                if(item.id === action.payload) {
                   return {...item, completed: !item.completed}
                };
                return item;
            })
        case(EDIT_TODO):
            return state.todos.map(item => {
                if(item.id === action.payload.todoId) {
                   return {...item, item: action.payload.newItem}
                };
                return item;
            });
        case(CLEAR_TODO):
            return state.todos.filter(item => {
                return !item.completed
            })
        default:
          return state
      }
}

export {initialState, reducer};
