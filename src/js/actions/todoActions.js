export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO_CHECKED = 'TOGGLE_TODO_CHECKED';
export const CHANGE_TITLE_TODO = 'CHANGE_TITLE_TODO';
export const CHANGE_DESCRIPTION_TODO = 'CHANGE_DESCRIPTION_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function add(id, title, description) {
    return {
        type: ADD_TODO,
        id: id,
        title: title,
        description: description,
    };
}

export function toggleTodoChecked(id) {
    return {
        type: TOGGLE_TODO_CHECKED,
        id: id
    };
}

export function changeTitle(id, title) {
    return {
        type: CHANGE_TITLE_TODO,
        id: id,
        title: title
    };
}


export function changeDescription(id, description) {
    return {
        type: CHANGE_DESCRIPTION_TODO,
        id: id,
        description: description
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id: id,
    };
}