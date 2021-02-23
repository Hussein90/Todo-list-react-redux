import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));
  






export default function TodoItem({todo}) {
  
 

    const classes = useStyles();
    let dispatch = useDispatch();
    let [editable, setEditable] = useState(false);
    let [name, setName] = useState(todo.name);
   
    return (
        <div>
            
           
        <div className="row">
        <Grid container spacing ={3}  wrap="nowrap"   >
          <Grid item xs={3}>
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' } } wrap="wrap"  />
        </Grid>
           <Grid item xs= {3}>
             {editable? <TextField  value={name} onChange={(e) => setName(e.target.value)} />  : <h2>{todo.name}</h2> }
          
           </Grid>
           <Grid item xs= {3}>
           <Button 
         onClick = {() => {
           dispatch(updateTodo(
             {
               ...todo,
               name:name,
             }
           ));
          if (editable) {
            setName(todo.name);
          }
            setEditable (!editable);
             
        }}
       
           mx="auto"  variant="contained" 
        color="Primary"
        className={classes.button}
        startIcon={<Edit />}
         >{editable?"Update": "Edit" }</Button>
         </Grid>
         <Grid item xs= {3}>
            <Button
            onClick = {() => dispatch(deleteTodo(todo.id))}
            variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}>  Delete </Button>
        </Grid>
        </Grid>
        </div>
            
        </div>
    )
}
