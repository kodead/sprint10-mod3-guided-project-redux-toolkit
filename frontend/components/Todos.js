import React from 'react'
import styled from 'styled-components'
// this library helps bind our application to redux
import { useSelector, useDispatch } from 'react-redux'
import { toggleShowCompletedTodos, toggleTodo } from '../state/todosSlice'

// useSelector is a hook that lets us grab the exact 
// piece of state we're interested in 
const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`
let id = 1
const getNextId = () => id++

export default function Todo() {
  const dispatch = useDispatch()
  const todos = useSelector(st => st.todosState.todos)
  // here we will call the hook and pass it as its argument
  // a callback. this callback takes as its own argument the 
  // entirety of application state which we will call st. then the arrow 
  // we will return the part of the state we wish to select. in this case
  //st.todoState.todos
  const showCompletedTodos = useSelector(st => st.todosState.showCompletedTodos) // TODO: this must come from app state!
  // TODO: enable ability to complete a todo!
  // TODO: enable toggling visibility of complete todos!

  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {
          todos
            .filter(todo => {
              return showCompletedTodos || !todo.complete
            })
            .map(todo => (
              <StyledTodo 
              onClick={() => dispatch(toggleTodo(todo.id))}$complete={todo.complete} key={todo.id}>
                <span>{todo.label}{todo.complete && ' ✔️'}</span>
              </StyledTodo>
            ))
        }
      </ul>
      <button onClick={() => dispatch(toggleShowCompletedTodos())}>
        {showCompletedTodos ? 'Hide' : 'Show'} completed todos
      </button>
    </div>
  )
}
