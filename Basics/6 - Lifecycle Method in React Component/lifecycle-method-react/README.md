Lifecycle methods in React are special methods that get called at different stages of a component's life in a React application. 

These methods allow you to run code at particular moments in the component's lifecycle, such as when the component is first added to the DOM, when it updates, and when it is removed from the DOM.

# Lifecycle Methods in Class Components
    
- Lifecycle methods can be grouped into three phases:

  1. Mounting: When a component is being inserted into the DOM.
  2. Updating: When a component is being re-rendered as a result of changes to props or state.
  3. Unmounting: When a component is being removed from the DOM.

### Mounting

1. constructor(): Called before the component is mounted. It is used to initialized the state and bind methods.

2. componentDidMount(): Called Immediately after the component is mounted. It is used for initializing things like fetching data, setting up subscriptions, etc.

### Updating

1. shouldComponentUpdate(nextProps, nextState): Determines if a component should update or not. Returns `true` or `false`. It is used for performance optimization.

2. componentDidUpdate(prevProps, prevState): Called immediately after the component updates. It is used for performing operations that need to happen after the component has updated.

### Unmounting

1. componentWillUnmount(): Called immediately before the component is unmounted and destroyed. It is used for cleanup, like removing event listners or cancelling network requests.

You just check the `LifecycleDemo.js` file and run this using command `npm start` and after running in browser, simply click `F12` button to open console and see the output how lifecycle methods executing..

## Explaination

1. constructor(): Initialize the state and logs "Constructor".

2. componentDidMount(): Logs `Component Did Mount` after the component is added to the DOM.

3. shouldComponentUpdate(): Logs `Should component update` and returns `true`, allowing the component to re-render.

4. componentDidUpdate(): Logs "Component did update" after the component has re-rendered.

5. componentWillUnmount(): Logs "Component will unmount" right before the component is removed from the DOM.

6. render(): Logs "Render" every time the component re-renders.


# Lifecycle Methods in Functional Components

With the introduction of React Hooks, functional component can also use lifecycle-like methods using `useEffect`:

Check the `LifecycleDemo.js` File

## Explaination

1. `useEffect(() => {...}, [])`: Runs once when the component mounts and returns a cleanup function that runs when the component unmounts.

2. `useEffect(() => {...}, [count])`: Runs everytime the `count` state changes, simulating componentDidUpdate.


By using lifecycle methods (or hooks in functional components), you can control what happens at different stages of a component's lifecycle, making your React components more powerful and flexible.
