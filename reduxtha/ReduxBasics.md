# Redux

<br>

<Details>

<summary>
    <h3> Getting Started with redux </h3>
</summary>

> 1. Redux

- Redux is for Javascript
- Should remember Redux is a library for `JS` Applications

2. Redux is a state container

- Redux stores the state of your application

```js
// LoginForm Component
state = {
  userName: '',
  password: '',
  submitting: false,
};

// UserListComponent
state = {
  users: [],
};

// Application
satate = {
  isUserLoggesIn: true,
  username: 'Chaitanya',
  profileUrl: '',
  onlineUsers: [],
  isModalOpened: false,
};
```

2. Redux is predicatable

- predicatable in what way ?
- Redux is a state Container
- The state of the application can change

<br>

<strong> If you want to manage the state of your application then redux will help you</strong>

- We have `Context API` & `useReducer` which can do same task...
- Redux launched in 2015.
- React-redux is thing we want.

# Mistakes

- Dont learn redux & react in parallel

</Details>

<br>
<hr>
<br>

<Details>

<summary>  <h3> Setting up Redux environment </h3> </summary>

> npm init -y

> npm install redux

</Details>

<br>
<hr>
<br>

<Details>

<summary>  <h3> Core Concepts of Redux </h3> </summary>

- A `store` that holds the state of your application
- An `action` that describes the changes in the state of the application
- A `reducer` which actually carries out the state transition depending on the action

> Three Principles

1. The state of your whole app is stored in an object tree withing a single store

2. The only way to change the stae is to emit an action, an object describing what happened

ex: Book Shop
Let the shopkeeper know about our action :- `BUY_CAKE`

3. To specify how the state tree is transformed by actions, you write pure reducers
   `Reducer - (prevState, action) => newState`

- To update the state of your application write reducer

ex: Reducer is the shopkeeper

</Details>

<br>
<hr>
<br>

<Details>

<summary>  <h3> Actions</h3> </summary>

- The only way your app can interact with the store

- Carry some information from your app to the redux store

- Plain Javascript objects

- Have a type property that indicates the type of action being performed

- The `type` property is typically defined as string constants

</Details>

<br>
<hr>
<br>

<Details>

<summary>  <h3> Redux Store</h3> </summary>

- One store for the whole application
  Responsibilities:-

-> Holds aaplication state.
-> Allows access to state via `getSatate()`
-> Allows state ti be updated via `dispatch(action)`
-> Registers listeners via `subscribe(listener)`
-> Handles unregistering of listeners via the function returned by subscribe(listener)

</Details>

<br>
<br>
<hr>

<Details>

<summary>
  <h3>
How to create Store
  </h3>
</summary>

```js
// creating a store
let store = redux.createStore(rootReducer);
```

Combine Reducer

```js
// Combine reducers
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
```

</Details>

<br>
<hr>
<br>

<Details>

<summary>  <h3> Middlewares </h3> </summary>

- To use middle wares we need to install one more thing `redux-logger`

- Async Action require middleware

<br>

<strong> 
Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. 
</strong>

<br>
<br>

- Why we use `redux-thunk`: https://www.freecodecamp.org/news/redux-thunk-explained-with-examples/

How to use Middleware

```js
//  import "redux-logger"
const reduxLogger = require('redux-logger');

const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// now pass this middleware in createStore as 2nd parameter

const subscrobe = createStore(reducer, applyMiddleware(logger));
```

</Details>

<br>
<br>

Basic redux finished
