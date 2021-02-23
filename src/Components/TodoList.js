import React from 'react'
import TodoItem from './TodoItem'
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';




export default function TodoList() {
   // const todos = useSelector(state => state.reducer.todos);
    let todos = useSelector(state => state);
    return (
        <div>

<Grid   bgcolor="info.main"   >

{todos.map(
    todo => {
        return <TodoItem key ={todo.id} todo= { todo } />
    }
)}
     
      </Grid>

      
        </div>
    )
}
