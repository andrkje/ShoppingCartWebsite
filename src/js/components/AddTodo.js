import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { add } from '../actions/todoActions'


var id = 1;

class AddTodo extends React.Component {

    addTodo(event) {
        this.props.add(id++,'test','test')
    }

    render() {
        return (
            <div>
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