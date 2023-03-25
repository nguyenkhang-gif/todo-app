import React, { Component, useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'
import axios from 'axios';

// import allTaskList from '../Task/taskdb.js'

const Form = (props)=> {
  const [input,setInput] = useState()
  // const [inputValue,setInputValue]= useState("")

  const HandleTask = async ()=>{
      try{
        const res = await axios({
              method: 'post',
              url: 'http://10.0.2.2:8800/addtodo', // my Node server on 3000 port 
              data:{content:input},  
              withCredentials: true,
           })
        setInput("")
        props.onAddtask()
      }catch(err){
        console.log(err)
  
      }
      
  }
  const HandleChange = ()=>{

  }
  return (
      <View style ={styles.addTask}>
        <TextInput style = {styles.input} onChangeText={(text)=>setInput(text)} value = {input} />
        <View style = {styles.containerBtn}>
            <TouchableOpacity onPress={HandleTask}  >
              <Text style= {styles.addbtn}>add</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}

export default Form