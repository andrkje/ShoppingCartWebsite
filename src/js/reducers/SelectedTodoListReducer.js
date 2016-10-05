import todoReducer from './TodoReducer';
import SET_SELECTED_TODO_LIST from './../actions/selectedTodoListActions';

const selectedTodoLists = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_TODO_LIST':
            return action.todoList;
        default:
            return state;
    }

};

export default selectedTodoLists;