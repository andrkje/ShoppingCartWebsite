import React from 'react';
import TodoList from '../components/TodoList'

const App = () => {
    return(
        <div>
            <h1>App</h1>

            <TodoList />

        </div>
    )
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default App;