import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Shopping cart app</h1>
                <Link to="">Home</Link>
                <Link to="login">Login</Link>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}