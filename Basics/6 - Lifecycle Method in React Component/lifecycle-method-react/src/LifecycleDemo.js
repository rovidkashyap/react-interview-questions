import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor(props){
        super(props);
        this.state = { count: 0 };
        console.log('Constructor');
    }

    componentDidMount(){
        console.log('Component did mount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should Component update');
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Component did update');
    }

    componentWillUnmount(){
        console.log('Component will unmount');
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        console.log('Render');
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default LifecycleDemo;