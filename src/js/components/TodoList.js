import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'
import { toggleTodoChecked } from '../actions/todoActions'

class TodoList extends React.Component {

    check(id) {
        this.props.toggleTodoChecked(id);
    }

    renderListItems() {
        return this.props.todos.map((todo) => {
            return (
                <li key={todo.id}>
                    <b>{todo.title}</b>
                    <input type="checkbox" onClick={this.check.bind(this, todo.id)}/><br/>
                    {todo.description}
                </li>
            );
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({toggleTodoChecked: toggleTodoChecked}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);