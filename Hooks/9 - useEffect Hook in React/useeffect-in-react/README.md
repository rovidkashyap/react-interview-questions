The `useEffect` hook in React is used to perform side effects in functional components. Side effects are actions that affect something outside the scope of a function, such as fetching data, updating the DOM, or subscribing to events. `useEffect` serves a similar purpose to lifecycle methods in class components, like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## Key Features of `useEffect`

1. **Runs After Render**: By default, `useEffect` runs after every render of the component.

2. **Dependencies Array**: You can control when `useEffect` runs by passing an array of dependencies. `useEffect` will only re-run if one of the dependencies has changed.

3. **Cleanup Function**: `useEffect` can return a function that will be run when the component is unmounted or before the effect runs again. This is useful for cleaning up subscriptions or timers.

Check the `DataFetcher.js` file and here is explaination of code..

1. **State Initialization**: `data` is used to store the fetched data, and `loading` indicated whether the data is being loaded.

2. **useEffect**: The `useEffect` hook runs once after the component mounts (due to the empty dependencies array`[]`).

3. **Fetching Data**: Fetch data from an API and update the state with `setData` and `setLoading`.

4. **Rendering**: Display a loading message while fetching data, and display the data once it's loaded.

