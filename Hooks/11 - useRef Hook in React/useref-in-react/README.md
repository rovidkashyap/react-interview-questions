The useRef hook in React is used to create a mutable object that persists for the lifetime of a component. This object can be used to store a reference to a DOM element or any other value that you want to keep between renders without causing a re-render when it changes.

## Common Use Cases for `useRef`

1. Accessing DOM Elements
2. Storing Mutable Values
3. Persisting State Across Renders Without Re-rendering

## Use Case 1: Accessing DOM Elements

`useRef` is commonly used to access and interact with DOM elements directly.

Check the `FocusInput.js` File for code.

## Explaination

1. **useRef**: Creates a reference to the input element.

2. **ref Attribute**: Assigns the reference to the `ref` attribute of the input element.

3. **handleFocus**: `focus()` on the input element when the button is clicked.

## Use Case 2: Storing Mutable Values

`useRef` can store any mutable value that you want to persist between renders withouts causing re-render.

Check the `PreviousState.js` File for code.

## Explaination

1. **useRef**: Creates a reference to store the previous count value.

2. **useEffect**: Updates the reference with the current count value after each render.

 3. **Previoud Value**:  Displays the current and previous count values.

## Use Case 3: Persisting State Acoss Renders Without Re-rendering

`useRef` is useful for persisting state-like values that don't need to trigger a re-render.

Check the `IntervalTimer.js` File for code.

## Explaination

1. **useRef**: Stores the interval ID.

2. **useEffect**: Sets up the interval when the component mounts and clears it when the component unmounts.

3. **Stop Timer**: Stops the interval when the button is clicked by clearing the interval using the stored ID.


By using `useRef`, you can handle direct DOM manipulations, track previous state values, and manage persistent state-like values effeciently within your React components.
