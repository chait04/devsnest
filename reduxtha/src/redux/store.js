import { createStore} from 'redux'
import { userFormReducer } from './userForm/userFormReducer'

// it takes reducer function as parameter
const store = createStore(userFormReducer) //conencted

export default store