import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import Todos from './Todos';

//  props
//  useState
//  Events

export interface Itodo {
  name: string
}

const TodoList = () => {

  const [input, setInput] = useState<string>("")
  const [todos, setTodos] = useState<Itodo[]>([])
  const [loading, setLoaing] = useState<boolean>(false)

  let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  let handleClick = () => {
    setLoaing(true)
    setTimeout(() => {
      setTodos([
        ...todos,
        { name: input },
      ])
      setLoaing(false)
    }, 2000);
    setInput('')
  }

  useEffect(() => {
    setTodos([
      { name: "Doubt session" },
      { name: "Go for walk" },
    ])
  }, [])

  return (
    <section>
      <form className="todoForm" onSubmit={(e) => handleSubmit(e)}>
        <input type='text' value={input} onChange={handleChange} />
        <button
          onClick={handleClick}
        >Add todos</button>
      </form>
      {loading ? <p>Loading...</p> : null}
      {/* <div>{JSON.stringify(todos)}</div> */}
      <section>
        {
          todos.map((todo, id) => (
            <Todos key={id} todo={todo} />
          ))
        }
      </section>
    </section>
  );
};

export default TodoList;
