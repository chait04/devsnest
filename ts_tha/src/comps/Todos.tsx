import { Itodo } from './TodoList'

interface Todo {
    todo: Itodo
}

const Todos = ({ todo }: Todo) => {
    return (
        <div>
            {/* {JSON.stringify(todo)} */}
            <div>{todo.name}</div>
        </div>
    )
}

export default Todos
