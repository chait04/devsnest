# Create Store

```jsx
import { createStore } from 'redux'

// it takes reducer function as an parameter
const store = createStore()

```

# State

```jsx

let initialState= {
    firstName: "",
    lastName: ""
}

```

# action Types

```js

updateFirstName=  "updateFirstName"
updateLastName = "updateFirstName"

```

# action creators

```js
// firstName updater
const updateFirstNameInput = (input) => {
    return {
        type: updateFistName,
        payload: input
    }
}

// lastName updater
const updateLastName = (input) => {
    return  {
        type: updateLastName,
        payload: input
    }
}

```

# Reducers
```js
case updateFirstName:
    firstName: "Do something"

case updateLastName:
    lastName: "do Somethignwith last name "

```