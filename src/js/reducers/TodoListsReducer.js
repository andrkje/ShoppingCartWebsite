import todoReducer from './TodoReducer';
import * as todoListActions from './../actions/todoListActions';

const todoLists = (state = [], action) => {
    switch (action.type) {
        case todoListActions.ADD_TODO_LIST:
            return  [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                }
            ];
        case todoListActions.CHANGE_TITLE_TODO_LIST:
            return state.map(todoList => {
                if (todoList.id === action.id) {
                    return {...todoList, title: action.title};
                }
                return todoList;
            });
        case todoListActions.CHANGE_DESCRIPTION_TODO_LIST:
            return state.map(todoList => {
                if (todoList.id === action.id) {
                    return {...todoList, description: action.description};
                }
                return todoList;
            });
        case todoListActions.DELETE_TODO_LIST:
            return state.filter(todoList => {
               return todoList.id !== action.id
            });
        default:
            return state;
    }

};

export default todoLists;