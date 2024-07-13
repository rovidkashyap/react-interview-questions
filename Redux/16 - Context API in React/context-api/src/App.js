import React, { useState, createContext, useContext } from 'react';

// Create a Context
const MyContext = createContext();

// Create a Provider Component
function MyProvider({ children }) {
  const [value, setValue] = useState('default');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// Component that uses the context
function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('new Value')}>Change Value</button>
    </div>
  );
}

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
