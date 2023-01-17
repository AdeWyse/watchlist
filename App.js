import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import { Task } from './Task';

export default function App() {
  //Input
  const [newTask, setNewTask] = useState('');
  const taskInputHandler = (enteredText) => {
    setNewTask(enteredText);

  };
  //Button
  const [appTasks, appTask] = useState([]);
  const addTaskHandler = () => {
    const task = {
      id: appTasks.length === 0 ? 1 : appTasks[appTasks.length - 1].id + 1,
      name: newTask,
      status: 'ToWatch' //ToWatch || Watched 

    };
    appTask(currentTask => [...currentTask, task]);
   setNewTask('');
  };

  const deleteTaskHandler = (id) => {
    appTask(appTasks.filter ((task) => task.id !== id));
  };

  const watchedHandler = (idToChange) => {
   appTask(appTasks.map((task) => {
      if(task.id === idToChange){
        if(task.status === 'ToWatch' ){
          return {...task, status: 'Watched'}
        }else{
          if(task.status === 'Watched' ){
            return {...task, status: 'ToWatch'}
          }
        }
          
      }else{
        return task;
      }
   }))
  };
  return (
    <View style={styles.container}>
      <h1 style= {styles.title}>Watchlist</h1>
      <View style={styles.inputContainer}>
        <TextInput placeholder = "Add Media" style = {styles.input} onChangeText = {taskInputHandler} value = {newTask}/>
        <Pressable style = {styles.button} onPress= {addTaskHandler}>
          <Text style = {styles.buttonInside}>+</Text>
        </Pressable>
      </View>
      <View style = {styles.itensBox} >
      {appTasks.map((task) =>{
        return <Task name={task.name} id={task.id}  status={task.status} styles={styles} 
        delete={deleteTaskHandler} watch={watchedHandler}></Task>;
      } )}
    </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232b2b',
    color: "white",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,

  },

  title: {
    textAlign: 'center',
    color: 'white',
    marginTop: 0.5,
    fontFamily: 'helvetica'
  },

  input :{
    borderLefthWidth: 2,
    borderLeftRadius: 5, 
    padding :10,
    width: '100%',
    paddingHorizontal: 20
  },

  inputContainer :{
    backgroundColor: 'white',
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center',
    width: '95%' ,
    borderLeftRadius: 3, 
    bottom:15
  },

  buttonInside :{
    color: '#232b2b',
    fontSize: 25,
    margin: 'auto',  
  },

  button :{
    backgroundColor: "#b967ff",
    width: '15%',
    borderRigthWidth: 2,
    borderRigthRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWatchedInside :{
    color: '#232b2b',
    fontSize: 20,
    margin: 'auto',  
  },
  
  buttonWatched :{
    
    backgroundColor: "#05ffa1",
    color: 'black',
    borderWidth: 1,
    borderRadius: 5, 
  },

  buttonToWatch :{
    backgroundColor: '#fffb96',
    color: 'black',
    borderWidth: 1,
    borderRadius: 5, 
  },

  buttonDeleteInside :{
    color: '#232b2b',
    fontSize: 15,
    margin: 'auto',  
  },
  
  buttonDelete :{
    
    backgroundColor: "#fc4a4a",
    borderWidth: 1,
    borderRadius: 5, 
    width: 30,
  },

  buttons: {
    alignItems: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  itens:{
    color: 'white',
    textAlign: 'left',
    flexWrap: 'wrap',
    margin: 0.5,
    marginBottom: 3,
    paddingRight: 5
  },

  itensWatched:{
    color: '#05ffa1',
    textAlign: 'left',
    flexWrap: 'wrap',
    margin: 0.5,
    marginBottom: 3,
    paddingRight: 5
  },

  itensContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    margin: 1,
  }
});
