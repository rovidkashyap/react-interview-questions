The `useCallback` hook in React is used to memoize callback functions, ensuring they only change if one of the dependencies changes. This can help improve performance by preventing unnecessary re-creations of functions, which can avoid unnecessary re-renders in child components that rely on those functions.

- **First Argument**: A function that you want to memoize.

- **Second Argument**: An array of dependencies. The callback wil only be re-created if one of these dependencies has changed since the last render.

## When to Use `useCallBack`

1. **Passing Callbacks to Optimized Child Components**: Use `useCallback` when passing functions to child components that are wrapped in `React.memo` or other optimization techniques to prevent unnecessary re-renders.

2. **Avoiding Re-Creation of Event Handlers**: Use `useCallback` to avoid re-creating event handlers or other callback functions on every render, which can help improve performance.

## Example: Optimizing Child Component with `useCallback`
Let's look at an example where `useCallback` is used to memoize a function that is passed to a child component.

## Explaination

1. **useState**: Manages the `count` state.

2. **useCallback**: Memoized the `handleClick` function so that it only changes if its dependencies change (in this case, it has no dependencies and will never change).

3. **ChildComponent**: A child component wrapped with `React.memo` to prevent unnecessary re-renders. It reveives the memoized `handleClick` function as a prop.

4. **Rendering**: Clicking the `Increment Count` button increments the count without causing the child component to re-render, thanks to `useCallback`.


By using `useCallback`, you can optimize your React applications by ensuring the functions are not recreated unnecessarily, thus improving performance and preventing unnecessary renders.
