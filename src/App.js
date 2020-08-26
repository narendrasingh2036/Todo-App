import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';
import firebase from 'firebase'
//npm run build----builds a small packet
//firebase deploy--- deploys your project 
function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  
  //when  the app loads, we need to liten to database and fetch new todos as they added/removed
  useEffect(()=>{
  //this code  here...fires when the app.js loads 
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => { 
      console.log("hello");
      //console.log(snapshot.docs.map(doc =>doc.data()));
      setTodos(snapshot.docs.map(doc => ({ id:doc.id ,todo: doc.data().todo})))
    })
  },[]);

  const addtodo=(event)=>{
    //this will start when we click the button
    event.preventDefault(); //will prevent refresh
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput(''); //clear the input
  }
  return (
    <div className="App">
      <h1>Hello World </h1>
      <form>
     <FormControl>
       <InputLabel>Write a Todo</InputLabel>
       <Input value={input} onChange={event =>setInput(event.target.value)}/>
     </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">Add Todo </Button>
      {//disabled does not allow empty values, onclick open runs the function
      }
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          //Todo is a component
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
