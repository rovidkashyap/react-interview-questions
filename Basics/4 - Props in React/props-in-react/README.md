In React, "props" (short for properties) are a mechanism for passing data from one component to another. They are read-only and should not be modified by the receiving component. Props allow components to be dynamic and reusable by enabling them to receive input data.

# Key Points about Props

    1. Read-Only: Props are immutable, meaning a component cannot modify its own props.

    2. Passed from Parent to Child: Props are passed from a parent component to a child component.

    3. Customizable Components: Props allow components to be reused with different data.

# Example

    Let's create a simple example to illustrate how props work in React.

        1. Parent Component: `App.js`
        2. Child Component: `Greeting.js`

    Check the files in source code

    In the `App` component the `Greeting` component is used three times with different `name` props: "Rovid", "Alice" and "Bob". Each instance of the `Greeting` component will recieve a different name value through props.

# Explaination

    1. Defning Props in Child Component:

        - In `Greeting.js` the `Greeting` functional component accepts `props` as an argument.
        - The component uses `props.name` to display the name passed to it.

    2. Passing Props from Parent Component:

        - In `App.js`, the `Greeting` component is used multiple times.
        - Each instance of `Greeting` is provided with `name` prop with different values.

# Example with Class Component

    Prop work similarly in class components. Here is how you would define and use props in a class component:

    We were using `GreetingClass.js` file (Child Component as Class)
    and `App.js` as Parent Component.

### Summary

    1. Props are way to pass data from a parent component to a child component in React.
    2. They are read-only and help make component dynamic and reusable.
    3. Props can be used in both functional and class components.
    4. In functional component, props are accessed via the `props` parameter.
    5. In class component, props are accessed via `this.props`.