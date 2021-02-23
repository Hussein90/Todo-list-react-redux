import {ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions";
import { todos } from "./states";

export let reducer = (state = todos  , action) => {
    let newTodos;
    switch (action.type) {
       
        case ADD_TODO:
        return [...state, action.payload];
         
         case DELETE_TODO:
         newTodos = [...state];
         newTodos = newTodos.filter(todo => todo.id !== action.payload)
         return newTodos;
         
         case UPDATE_TODO : {
            return state.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name}: todo)
          }

   
        
        default:
            return state;
    }
}       