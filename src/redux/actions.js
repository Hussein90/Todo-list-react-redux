export let ADD_TODO = "addTodo";
export let DELETE_TODO ="deleteTodo";
export let UPDATE_TODO ="updateTodo";

export  function addTodo(todo) {

    return{
        type: ADD_TODO,
        payload: todo ,
    }
    
};



export  function deleteTodo(todoid) {

    return{
        type: DELETE_TODO,
        payload: todoid ,
    }
    
};
export  function updateTodo(todo) {

    return{
        type: UPDATE_TODO,
        payload: todo ,
    }
    
};