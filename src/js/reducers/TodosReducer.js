import todoReducer from './TodoReducer';
import * as todoActions from './../actions/todoActions';

const todos = (state = [], action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return  [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    checked: false
                }
            ];
        case todoActions.TOGGLE_TODO_CHECKED:
            return state.map(todo => todoReducer(todo, action));
        case todoActions.CHANGE_TITLE_TODO:
            return state.map(todo => todoReducer(todo, action));
        case todoActions.CHANGE_DESCRIPTION_TODO:
            return state.map(todo => todoReducer(todo, action));
        case todoActions.DELETE_TODO:
            return state.filter(todo => todoReducer(todo, action));
        default:
            return state;
    }
};

export default todos;