import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { add } from '../actions/todoListActions'

var id = 1;

class AddTodoList extends React.Component {
    componentDidMount() {
        this.props.add(id++, "Todo list "+id, 'This is the description')
        this.props.add(id++, "Todo list "+id, 'This is the description')
        this.props.add(id++, "Todo list "+id, 'This is the description')
        this.props.add(id++, "Todo list "+id, 'This is the description')
        this.props.add(id++, "Todo list "+id, 'This is the description')

    }

    addTodoList() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        this.props.add(id++, title, description)
        this.resetForm()
    }

    resetForm() {
        this.titleInput.value = ''
        this.descriptionInput.value = '';
    }

    render() {
        return (
            <div>
                <form>
                    Title:
                    <input type="text" ref={(node) => {
                       this.titleInput = node
                    }}/><br/>
                    Description:
                    <input type="text" ref={(node) => {
                        this.descriptionInput = node;
                    }}/><br/>
                    <button type="button" onClick={this.addTodoList.bind(this)}>Add todo list</button>
                </form>
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
    return bindActionCreators({add:add}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoList);