A reducer in Redux is a pure function that determines how the state of the application changes in response to an action. Reducers take the current state and an action as arguments and return a new state. They are called "reducers" because they reduce multiple actions over time into a single state object.

## Key Characteristics of a Reducer

1. **Pure Function**: A reducer must be a pure function, meaning it should always return the same output given the same input and should not produce any side effects (e.g., no API calls, no modifying global variables).

2. **Takes Two Parameters**: A reducer function takes two parameters:

    - Current State: The current state of the application.
    - Action: An action object that describes what happened and has a type property.

3. **Returns a New State**: The reducer returns a new state object based on the action received. It should not modify the existing state directly but instead return a new object with the updated state.