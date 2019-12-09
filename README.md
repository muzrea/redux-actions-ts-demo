this repo is a demo to introduce how to use redux-actions in ts.
this repo complete create a todo list.
and below is a process how we use redux-actions:

### use Redux-actions's process: 

1. import createStore to create a store

2. import createAction handleAction to create our action and handle that action

3. Create first action: 

   ```
   const increment = createAction('INCREMENT');
   ```

4. Handle this action: 

   ```
   const reducer = handleAction(
   	increment,
   	(state,action) => ({
   		...state,
   		counter: state.counter + 1
   	}),
   	defaultState
   );
   ```

   Handle action produced a reducer for our redux store. Now that we have a reducer we can create a store.

   ```
   const store = createStore(reducer,defaultState)
   ```

5. if we want to add more actions, we can use handleActions to replace handleAction

   ```
    const { createAction, handleActions } = window.ReduxActions;
    const reducer = handleActions({
    	[increment]: state => ({...state, counter: state.counter + 1},
    	[decrement]: state => ({...state, counter: state.counter - 1},)
    },defaultState);
   ```

    modify using createAction to createActions

   ```
   const { increment,decrement } = createActions('INCREMENT','DECREMENT')
   ```

now there comes a problem : how can we use redux-actions in TypeScript?

how we use redux-actions in ts please reference to this demo.

reference to : https://redux-actions.js.org/introduction/tutorial