import React from 'react';

export default class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }


    loginSimulation(username, password) {
        if (this.isValidLoginCredentials(username, password)) {
            console.log('You are logged in!');
        } else {
            console.log('The username and password combination provided is invalid!');
        }
    }

    isValidLoginCredentials(username, password) {
        return (username === 'admin' && password === '123');
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {


        return (
            <div>
                <p2>Login</p2>
                <form>
                    Username: <input
                    value={this.state.username}
                    onChange={this.changeUsername.bind(this)}
                    type="text"/><br/>
                    Password: <input
                    value={this.state.password}
                    onChange={this.changePassword.bind(this)}
                    type="password"/><br/><br/>
                    <button
                        type="button"
                        onClick={this.loginSimulation.bind(this, this.state.username, this.state.password)}>Login</button>
                </form>
            </div>
        );
    }
}