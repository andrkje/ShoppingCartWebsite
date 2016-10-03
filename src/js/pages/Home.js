import React from 'react';
import { createStore } from 'redux';

import TodoLists from '../components/TodoLists'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <TodoLists/>
            </div>
        );
    }
}