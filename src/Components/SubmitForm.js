
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from "@material-ui/icons/Add";
import '../App.css';
import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo } from "../redux/actions";
import { v1 as uuid} from "uuid";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));
  








function SubmitForm(todo) {
  
    const classes = useStyles();
    const [name, setName] = useState();
    let  dispatch = useDispatch();
    
    

    return (
      <div className="Submit-Form">
         <CssBaseline />
        <Container >
        <form className={classes.root} margin="dense" noValidate autoComplete="off">
        <Grid container direction="row" alignItems="center" wrap="nowrap">
    
      
    <TextField id="outlined-basic"  label="Outlined" variant="outlined" onChange={(e) => setName(e.target.value)} value={name} />
  
    <Grid item>
    <Button 
    onClick = {() =>{ 
      dispatch
     (addTodo({
                id:uuid(),
                name: name,
   
              }));
            setName('');
            }}
    variant="contained"
     color="primary"
      size="large" 
       mx="auto">
         
    <Add />  Add
          
        </Button>
    </Grid>
  </Grid>
       
        
       
        
      </form>
        </Container>
         
      </div>
    );
  }
  
  export default SubmitForm;