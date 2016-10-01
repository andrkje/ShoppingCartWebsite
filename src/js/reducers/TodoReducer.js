import * as todoActions from './../actions/todoActions';

const todo = (state, action) => {
    switch (action.type) {
        case todoActions.ADD_TODO:
            return {
                id: action.id,
                title: action.title,
                description: action.description,
                checked: false
            };
        case todoActions.TOGGLE_TODO_CHECKED:
            if (state.id === action.id) {
                return {...state, checked: !state.checked};
            }
            return state;
        case todoActions.CHANGE_TITLE_TODO:
            if (state.id === action.id) {
                return {...state, title: action.title};
            }
            return state;
        case todoActions.CHANGE_DESCRIPTION_TODO:
            if (state.id === action.id) {
                return {...state, description: action.description};
            }
            return state;
        case todoActions.DELETE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            break;
        default:
            return state;
    }
};

export default todo;