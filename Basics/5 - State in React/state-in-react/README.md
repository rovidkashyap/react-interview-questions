In React, "state" is an object that represents the dynamic parts of a component. State is managed within the component (unlike props which are passed down from a parent component) and can be changed over time, usually in response to user actions or other events. When the state of a component changes, React re-renders the component to reflect the new state.

# Key Points about State

    1. Managed within the Component: Unlike props, which are passed from parent to child, state is owned and managed by the component itself.

    2. Mutable: The state can change, usually through user interactions or other events.

    3. Triggers Re-renders: When state changes, React automatically re-renders the component to reflect those changes.

# Example with Functional Components

Let's create a simple example to illustrate how state works in a functional component using the `useState` hook.

Check the `Counter.js` File (Functional Component)

# Explaination

    1. Importing `useState` Hook: `useState` is a hook that lets you add React state to functional component.

    2. Initializing State: `count [count, setCount] = useState(0);` initialize a state variable `count` with an initial value of `0`. `setCount` is a function that update the state.

    3. Rendering State: `{count}` is used within the JSX to display the current state.

    4. Updating State: The `onClick` handler on the button calls `setCount(count+1)`, which updates the state and triggers a re-render.


# Example with Class Components

Here's how you would manage state in a class component.

Check `CounterClass.js` File (Class Component)

# Explaination

    1. Constructor and Initial State: In the constructor, `this.state` is initialized with an object containing the state variables. Here, `count` is initialized to `0`.

    2. Rendering State: `{this.state.count}` is used within the JSX to display the current state.

    3. Updating State: The `handleClick` method calls `this.setState({ count: this.state.count + 1 })`, which updates the state and triggers a re-render.