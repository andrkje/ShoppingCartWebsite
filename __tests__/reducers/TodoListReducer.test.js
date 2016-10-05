import deepFreeze from 'deep-freeze';

import * as todoListActions from '../../src/js/actions/todoListActions';
import todoList from '../../src/js/reducers/TodoListsReducer';

it('Default state', () => {
    const action = {
        type: 'RANDOM'
    };
    const stateAfter = [];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todoList(undefined, action)
    ).toEqual(stateAfter);
});

it('Invalid action', () => {
    const stateBefore = [{
        id: 1,
        title: 'Title',
        description: 'Description'
    }];
    const action = {
        type: 'RANDOM'
    };
    const stateAfter = [{
        id: 1,
        title: 'Title',
        description: 'Description'
    }];

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todoList(stateBefore, action)
    ).toEqual(stateAfter);
});


it('Add todo list', () => {
    const stateBefore = [];
    const action = todoListActions.add(
        1,
        'Title',
        'Description',
    );
    const stateAfter = [
        {
            id: 1,
            title: 'Title',
            description: 'Description'
        }
    ];

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todoList(stateBefore, action)
    ).toEqual(stateAfter);

});

it('Change title todo list', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            title: 'Title2',
            description: 'Description2'
        }
    ];
    const action = todoListActions.changeTitle(
        2,
        'NewTitle2'
    );
    const stateAfter = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            title: 'NewTitle2',
            description: 'Description2'
        }
    ];

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todoList(stateBefore, action)
    ).toEqual(stateAfter);
});

it('Change description todo list', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            title: 'Title2',
            description: 'Description2'
        }
    ];
    const action = todoListActions.changeDescription(
        2,
        'NewDescription2'
    );
    const stateAfter = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            title: 'Title2',
            description: 'NewDescription2'
        }
    ];

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todoList(stateBefore, action)
    ).toEqual(stateAfter);
});

it('Delete todo list', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'Title1',
            description: 'Description1'
        },
        {
            id: 2,
            title: 'Title2',
            description: 'Description2'
        }
    ];
    const action = todoListActions.deleteTodoList(1);
    const stateAfter = [
        {
            id: 2,
            title: 'Title2',
            description: 'Description2'
        }
    ];

    deepFreeze(action);
    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todoList(stateBefore, action)
    ).toEqual(stateAfter);
});
