import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { add } from '../actions/todoActions'


var id = 1;

class AddTodo extends React.Component {

    addTodo() {
        let title = this.titleInput.value;
        let description = this.descriptionInput.value;
        this.props.add(id++, title, description)
    }

    render() {
        return (
            <div>
                <input ref={ (node) => {
                    this.titleInput = node
                }}/><br/>
                <input ref={ (node) => {
                    this.descriptionInput = node
                }}/><br/>
                <button onClick={
                    this.addTodo.bind(this)
                }>Add</button>
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
    return bindActionCreators({add:add}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);