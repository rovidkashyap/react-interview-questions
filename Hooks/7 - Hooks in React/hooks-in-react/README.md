`React Hooks` are functions that let you use state and other React features in functional components. Introduced in React 16.8, hooks allow functional components to perform side effects, manage state, and use other React features without needing to write class components.

## Commonly Used Hooks
    
1. **useState**: Manages state in a functional component.

2. **useEffect**: Performs side effects in a functional component, such as data fetching or subscribing to events.

3. **useContext**: Accesses the context value in a functional component.

4. **useReducer**: Manages state using a reducer function, an alternative to useState.

5. **useCallback**: Returns a memoized callback function.

6. **useRef**: Accesses a mutable ref object.

7. **useMemo**: Returns a memoized value.

8. **useLayoutEffect**: Similar to useEffect but fires synchronously after all DOM mutations.

9. **useImperativeHandle**: Customize the instance value that is exposed to parent components when using refs.

## Rules of Hooks

There are two main rules for using hooks:

1. **Only Call Hooks at the Top Level**: Don't call hooks inside loops, conditions, or nested functions. Always use hooks at the top level of your React function, before any early returns. This ensures hooks are called in the same order each time a component renders, preserving the state across re-renders.

2. **Only Call Hooks from React Functions**: Don't call hooks from regular JavaScript functions. Instead, call hooks from React functional components or custom hooks. This ensures that hooks are used within the context of a React component's lifecycle.

By following these riles and using hooks appropriately, you can manage state and side effects in a more functional and concise way, leading to cleaner and more maintainable React code.
