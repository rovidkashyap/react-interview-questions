import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 };
    }

handleClick = () => {
    this.setState({ count: this.state.count + 1 });
};

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times.</p>
                <button onClick={this.handleClick}>
                    Click me
                </button>
            </div>
        );
    }
}

export default CounterClass;