import deepFreeze from 'deep-freeze';

import * as TodoActions from '../../src/js/actions/todoActions';
import todos from '../../src/js/reducers/TodosReducer';

it('Add todo ', () => {

    const stateBefore = [];
    const action = TodoActions.add(
        1,
        'test',
        'test',
    );
    const stateAfter = [
        {
            id: 1,
            title: 'test',
            description: 'test',
            checked: false
        }
    ];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);

});

it('Toggle todo ', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: false
        }
    ];
    const action = TodoActions.toggleTodoChecked(2);
    const stateAfter = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: true
        }
    ];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);

});

it('Change title todo', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: false
        }
    ];
    const action = TodoActions.changeTitle(2, 'test');
    const stateAfter = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test',
            description: 'test2',
            checked: false
        }
    ];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});

it('Change description todo', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: false
        }
    ];
    const action = TodoActions.changeDescription(2, 'test');
    const stateAfter = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test',
            checked: false
        }
    ];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});

it('Delete todo', () => {
    const stateBefore = [
        {
            id: 1,
            title: 'test1',
            description: 'test1',
            checked: false
        },
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: false
        }
    ];
    const action = TodoActions.deleteTodo(1);
    const stateAfter = [
        {
            id: 2,
            title: 'test2',
            description: 'test2',
            checked: false
        }
    ];

    deepFreeze(action);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});