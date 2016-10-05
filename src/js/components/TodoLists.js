import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteTodoList } from '../actions/todoListActions'
import { setSelectedTodoList } from '../actions/selectedTodoListActions'

import AddTodoList from './AddTodoList'
import EditTodoList from './EditTodoList'

class TodoLists extends React.Component {
    constructor() {
        super()
        this.state = {
            showEditForm: false
        }
    }


    renderTodoLists() {
        return this.props.todoLists.map((todoList) => {
            return (
                <li key={todoList.id}>
                    <b>{todoList.title}</b><br/>
                    {todoList.description}
                    <button type="button" onClick={this.editTodoList.bind(this, todoList)}>Edit</button>
                    <button type="button" onClick={this.deleteTodoList.bind(this, todoList.id)}>Delete</button>
                </li>
            );
        })
    }

    editTodoList(todoList) {
        this.props.setSelectedTodoList(todoList)
        this.toggleEdit()
    }

    toggleEdit() {
        this.setState({showEditForm: !this.state.showEditForm})
    }


    deleteTodoList(id) {
        this.toggleEdit()
        this.props.setSelectedTodoList({})
        this.props.deleteTodoList(id)
    }

    render() {
        return (
            <div>
                <AddTodoList/>

                {this.state.showEditForm && <EditTodoList/>}
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
    return bindActionCreators(
        {
            deleteTodoList: deleteTodoList,
            setSelectedTodoList: setSelectedTodoList
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);