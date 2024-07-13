The `Context API` is a feature in React that allows you to manage and share state or data across multiple components without having to pass props down manually through every level of your component tree. 

It is particularly useful for avoiding `prop drilling`, where you have to pass data through many layers of components that don’t necessarily need to use the data themselves.

## Components of Context API

1. `React.createContext()`
    - This function creates a Context object. It returns a Provider and a Consumer component.
    ### Example
        import React from 'react';

        const MyContext = React.createContext();

2. `Context.Provider`
    - This component is used to provide the context value to the component tree. It accepts a `value` prop that holds the data you want to share.
    ### Example
        function MyProvider({ children }) {
            const [value, setValue] = React.useState('default');

            return (
                <MyContext.Provider value=({ value, setValue })>
                    {children}
                </MyContext.Provider>
            );
        }

3. `Context.Consumer`
    - This component is used to access the context value within a component. You use it with a function as a child, also known as a render prop, to get the context value.
    ### Example
        function MyConsumer() {
            return (
                <MyContext.Consumer>
                    {({ value, setValue }) => (
                        <div>
                            <p>Value: {value}</p>
                            <button onClick={() => setValue('new value')}>Change Value
                            </button>
                        </div>
                    )}
                </MyContext.Consumer>
            );
        }

4. `useContext` Hook
    - For Functional components, the `useContext` hook provide a simpler way to access the context value without using `Context.Consumer`.
    ### Example
        import React, { useContext } from 'react';

        function MyComponent() {
            const { value, setValue } = useContext(MyContext);

            return (
                <div>
                    <p>Value: {value}</p>
                    <button onClick={() => setValue('new Value')}>Change Value
                    </button>
                </div>
            );
        }

## You can Check the Code file for code.

## In this example
    - `MyContext` is created to hold tha shared data.

    - `MyProvider` is a component that provides the context value.

    - `MyComponent` consumes the context value using the `useContext` hook.