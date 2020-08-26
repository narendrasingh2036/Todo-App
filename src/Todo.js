 import React, { useState } from 'react'
 import './Todo.css';
import { List, ListItem, ListItemText, Modal, makeStyles, Button,} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase'; 

//by typing refc we can have some preprinted program for help.
//props helps in calling value from one page to another.
const useStyles=makeStyles((theme)=>({
    paper:{
        position:'absolute',
        width: 400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },

}));
 function Todo(props) {
     const classes = useStyles();
     const [open,setOpen]=useState(false);
     const [input,setInput]=useState();


     const handleOpen = () =>{
       setOpen(true);  
     };
     const updateTodo = () =>{
         //update the todo with the new text
         db.collection('todos').doc(props.todo.id).set({
            todo:input
         },{merge:true});

        setOpen(false);
     };
     return (
         <>
         <Modal 
            open={open}
            onClose={e => setOpen(false)}
         >
             <div className={classes.paper}>
                 <h1>I am modal</h1>
                 <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                 <Button onClick={updateTodo}>Update Todo</Button>
             </div>
         </Modal>
         <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy"/>
            </ListItem>
            <button onClick={e=>setOpen(true)}>Edit</button>
            <DeleteIcon onClick={ event => db.collection('todos').doc(props.todo.id).delete()}/>
         </List>
         </>
     )
 }
 
 export default Todo
 