import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { changeDescription, changeTitle } from '../actions/todoListActions'
import { setSelectedTodoList } from '../actions/selectedTodoListActions';
//import { selectedTodoLists } from '../reducers/SelectedTodoListReducer'

class EditTodoList extends React.Component {

    changeTitle(event) {
        this.props.changeTitle(
            this.props.selectedTodoLists.id,
            event.target.value
        )
        this.updateSelectedTodoListTitle(event.target.value)
    }

    updateSelectedTodoListTitle(title) {
        this.props.setSelectedTodoList({...this.props.selectedTodoLists, title: title})
    }

    changeDescription(event) {
        this.props.changeDescription(
            this.props.selectedTodoLists.id,
            event.target.value
        )
        this.updateSelectedTodoListDescription(event.target.value)
    }

    updateSelectedTodoListDescription(description) {
        this.props.setSelectedTodoList({...this.props.selectedTodoLists, description: description})
    }

    render() {
        console.log(this.props.selectedTodoLists.title)
        return (
            <div>
                <form>
                    Title:
                    <input value={this.props.selectedTodoLists.title} type="text" onChange={this.changeTitle.bind(this)}/><br/>
                    Description:
                    <input value={this.props.selectedTodoLists.description} type="text"  onChange={this.changeDescription.bind(this)}/><br/>
                    <button type="button" >Save changes</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoLists: state.todoLists,
        selectedTodoLists: state.selectedTodoLists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeDescription: changeDescription,
            changeTitle: changeTitle,
            setSelectedTodoList: setSelectedTodoList
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoList);