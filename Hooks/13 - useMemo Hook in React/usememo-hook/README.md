The useMemo hook in React is used to memoize a value or a result of a computation so that it is only recomputed when one of its dependencies has changed. This can help improve performance by preventing expensive calculations from running on every render.

    - **First Argument**: A function that returns the value to be memoized.

    - **Second Argument**: An array of dependencies. The function will only recompute the value if one of these dependencies has changed since the last render.

## When to Use `useMemo`

1. **Expensive Calculations**: Use `useMemo` to optimize expensive calculations that don't need to be recomputed on every render.

2. **Referential Equality**: Use `useMemo` to preserve referential equality of objects and arrays between renders, which can help prevent unnecessary re-renders of child components that depend on those objects.

## Example: Optimize Expensive Calculation
Let's consider an example where we have an expensive calculation that should only be recalculated when its dependencies change.

## Explaination

1. **useState**: Manages the `count` state.

2. **expensiveCalculation**: A function that performs an expensive calculation.

3. **useMemo**: Memoizes the result of `expensiveCalculation(a, b)`. The calculation is only recomputed when `a` or `b` changes.

4. **Rendering**: The memoized value is displayed, and clicking the button increments the count without triggering the expensive calculation again.

## Example: Preserving Referential Equality
`useMemo` can also be used to memoize objects or arrays to prevent unnecessary re-renders of child components that rely on them.

## Explaination

1. **ChildComponent**: A child Component that accpets a `data` prop and is wrapped with `React.memo` to prevent unnecessary re-renders.

2. **useMemo**: Memoizes the `data` object so that its reference doesn't change between renders.

3. **Rendering**: The child component only re-renders when the `data` reference changes. Clicking the button increments the count wihtout causing the child component to re-renders, thanks to `useMemo`.