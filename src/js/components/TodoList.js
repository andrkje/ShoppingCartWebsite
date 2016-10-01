import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddTodo from './AddTodo'

class TodoList extends React.Component {

    check(id) {
        console.log('check', id)
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


export default connect(mapStateToProps)(TodoList);