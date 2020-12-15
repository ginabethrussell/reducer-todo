import TodoList from "../components/TodoList";

const initialTodos = [{
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
];

const reducer = (state, action) => {
    console.log('reducing', state, action.type, action.payload)
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'DELETE':
            return state.filter(item => item.id != action.payload)
        case 'COMPLETED':
            console.log('completed case', state, action.payload)
            return state.map(item => {
                if(item.id === action.payload) {
                   return {...item, completed: !item.completed}
                };
                return item;
            })
        case 'EDIT':
            return state.map(item => {
                if(item.id === action.payload.todoId) {
                   return {...item, item: action.payload.newItem}
                };
                return item;
            });
        case 'CLEAR':
            return state.filter(item => {
                return !item.completed
            })
        default:
          return state
      }
}

export {initialTodos, reducer};
// payload: {todoId: todoId, newItem: newItem}