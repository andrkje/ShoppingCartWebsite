import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'

class TodoList extends React.Component {

    renderListItems() {
        return this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>
        });
    }

    render() {
        return (
            <div>
                <AddTodo/>
                <ul>
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodoList);