import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';

export default function App() {
  //Input
  const [newTask, setNewTask] = useState('');
  const taskInputHandler = (enteredText) => {
    setNewTask(enteredText);

  };
  //Button
  const [appTasks, appTask] = useState([]);
  const addTaskHandler = () => {
    appTask(currentTask => [...currentTask, newTask]);
   setNewTask('');
  };

  const deleteTaskHandler = (task) => {

    appTask(appTasks.filter ((name) => {
      if(name === task){
        return false;
      }
      return true;
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder = "Add To-Do" style = {styles.input} onChangeText = {taskInputHandler} value = {newTask}/>
        <Pressable style = {styles.button} onPress= {addTaskHandler}>
          <Text style = {styles.buttonInside}>+</Text>
        </Pressable>
      </View>
      <View style = {styles.itensBox} >
      {appTasks.map((task) =>{
        return <View>
          <Text style = {styles.itens}>{task} - <Pressable style = {styles.buttonDelete} onPress= {() =>{ return deleteTaskHandler(task)}}>
          <Text style = {styles.buttonDeleteInside}> X </Text>
        </Pressable></Text>
        </View>
      } )}
    </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    color: "white",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 20,

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
    color: 'black',
    fontSize: 25,
    margin: 'auto',  
  },

  button :{
    backgroundColor: "purple",
    width: '15%',
    borderRigthWidth: 2,
    borderRigthRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonDeleteInside :{
    color: 'black',
    fontSize: 50,
    margin: 'auto',  
  },
  buttonDelete :{
    backgroundColor: "red",
    borderWidth: 1,
    borderRadius: 3, 
    alignItems: 'center',
    justifyContent: 'center'
  },

  input :{
    borderLefthWidth: 2,
    borderLeftRadius: 5, 
    padding :10,
  },

  itensBox:{
    
  },

  itens:{
    color: 'white',
    textAlign: 'left',
  },
});
