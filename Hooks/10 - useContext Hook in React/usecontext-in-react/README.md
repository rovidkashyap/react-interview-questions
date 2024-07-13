The useContext hook in React allows you to access the context values in a functional component without needing to wrap your component in a Consumer. 

This hook provides a way to pass data through the component tree without having to pass props down manually at every level.

## How `useContext` Works

- **Context**: A way to share values like themes, user information, or settings across the component tree without having to pass props down manually at every level.

- **Provier**: A component holds the context value and provides it to its children.

- **useContext Hook**: Accesses the context value directly in a functional component.

## Example: Theme Context

Let's create an example using a theme context to toggle between light and dark modes.

**Step 1: Create Context**

First, create a context for the theme.

**Step 2: Use Context in Components**

Now, let's use the `ThemeContext` in a component to read the current theme and toggle it.

**Step 3: Wrap Components with Provier**

Finally, wrap your components with the `ThemeProvider` in your app.
