import deepFreeze from 'deep-freeze';

import * as selectedTodoListActions from '../../src/js/actions/selectedTodoListActions';
import selectedTodoLists from '../../src/js/reducers/SelectedTodoListReducer';

it('Set selected selected todo list', () => {
    const stateBefore = {};
    const todoList = {
        id: 1,
        title: 'test',
        description: 'test',
    };
    const action = selectedTodoListActions.setSelectedTodoList(todoList);
    const stateAfter =
        {
            id: 1,
            title: 'test',
            description: 'test',
        }

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        selectedTodoLists(stateBefore, action)
    ).toEqual(stateAfter);

});