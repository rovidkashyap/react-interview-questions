import React, { Component } from 'react';

class GreetingClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <p>Welcome to the React Class Component.</p>
            </div>
        );
    }
}

export default GreetingClass;