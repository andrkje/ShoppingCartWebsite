import { combineReducers } from 'redux';

import selectedTodoLists from '../reducers/SelectedTodoListReducer'
import todo from './TodoReducer';
import todos from './TodosReducer';
import todoLists from './TodoListsReducer';

export default combineReducers({
    todo,
    todos,
    todoLists,
    selectedTodoLists
});