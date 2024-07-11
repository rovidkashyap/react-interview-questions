The useState hook is a fundamental hook in React that allows functional components to manage state. It provides a way to add state to functional components, which was not possible before hooks were introduced.

## How `useState` Works

    - **Initial State**: You pass the initial state as an argument to `useState`.

    - **State Variable**: `useState` returns an array with two elements, the current state and a function to update the state.

    - **Updater Function**: You use the updater function to change the state, which triggers a re-render of the component.

        const [state, setState] = useState(initialState);

        - `state`: The current state value.
        - `setState`: A function that updates the state.

Check the `Counter.js` file, and here is the explaination of that code:

1. **Importing `useState`**: The `useState` hook is imported from React.

2. **Declaring State**: `const [count, setCount] = useState(0);`
    - `count` is the state variable, initialized to `0`.
    - `setCount` is the function used to update `count`.

3. **Rendering State**: The current state (`count`) is displayed inside a `<p>` element.

4. **Updating State**: The `onClick` event handler for the button calls `setCount(count + 1)`, which increments the `count` state and triggers a re-render.