import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteTodoList } from '../actions/todoListActions'
import AddTodoList from './AddTodoList'

class TodoLists extends React.Component {

    renderTodoLists() {
        return this.props.todoLists.map((todoList) => {
            return (
                <li key={todoList.id}>
                    <b>{todoList.title}</b><br/>
                    {todoList.description}
                    <button type="button" onClick={this.deleteTodoList.bind(this, todoList.id)}>Delete</button>
                </li>
            );
        })
    }

    deleteTodoList(id) {
        this.props.deleteTodoList(id)
    }

    render() {
        return (
            <div>
                <AddTodoList/>
                <ul>
                    { this.renderTodoLists() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoLists: state.todoLists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTodoList: deleteTodoList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);