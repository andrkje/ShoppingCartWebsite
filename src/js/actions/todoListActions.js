export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export const CHANGE_TITLE_TODO_LIST = 'CHANGE_TITLE_TODO_LIST';
export const CHANGE_DESCRIPTION_TODO_LIST = 'CHANGE_DESCRIPTION_TODO_LIST';
export const DELETE_TODO_LIST = 'DELETE_TODO_LIST';

export function add(id, title, description) {
    return {
        type: ADD_TODO_LIST,
        id: id,
        title: title,
        description: description,
    };
}


export function changeTitle(id, title) {
    return {
        type: CHANGE_TITLE_TODO_LIST,
        id: id,
        title: title
    };
}


export function changeDescription(id, description) {
    return {
        type: CHANGE_DESCRIPTION_TODO_LIST,
        id: id,
        description: description
    };
}

export function deleteTodoList(id) {
    return {
        type: DELETE_TODO_LIST,
        id: id,
    };
}