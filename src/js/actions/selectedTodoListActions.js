export const SET_SELECTED_TODO_LIST = 'SET_SELECTED_TODO_LIST';

export function setSelectedTodoList(todoList) {
    return {
        type: SET_SELECTED_TODO_LIST,
        todoList: todoList
    };
}
