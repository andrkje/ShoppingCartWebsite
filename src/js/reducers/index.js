import { combineReducers } from 'redux';

import todo from './TodoReducer';
import todos from './TodosReducer';
import todoLists from './TodoListsReducer';

export default combineReducers({
    todo,
    todos,
    todoLists
});