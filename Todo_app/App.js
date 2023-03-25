import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet,Text, View } from 'react-native';
import Task from './component/Task';
import Header from './component/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './component/form';


const flatlist = [
  {
    id:"1",
    value:"first item"
  },
  {
    id:"2",
    value:"second item"
  },
  {
    id:"3",
    value:"thir item"
  },
  {
    id:"4",
    value:" item4"
  },
  
  {
    id:"5",
    value:"item 5"
  },
  
  {
    id:"6",
    value:"item 6"
  },
  
  {
    id:"7",
    value:"item 7 "
  },
  
  {
    id:"8",
    value:"thir item"
  }
]




export default function App() {
  const [alltodo,setAlltodo]= useState([])
  
  const fetchAlltodo = async ()=>{
    try{
      const res = await  axios({
            method: 'get',
            url: 'http://10.0.2.2:8800', // my Node server on 3000 port   
            withCredentials: true
        })
        // alert("todo")
        // let count = 1
        setAlltodo(res.data)
        
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchAlltodo()
  },[])
  
  const HandleTask= ()=>{
    
  }

  const [taskList,setTaskList] = useState(true)
  
  
  
  return (
    <View style={styles.container}>
      <Header/>
      <View style = {styles.containerTask}>      
          {/* <FlatList
            data={alltodo}
            renderItem= {({item,index})=><Task index = {index+1} value = {item.content} id = {item.id} onDelete = {()=>fetchAlltodo()}/>}
            keyExtractor={item => item.id}
          />  */}
          
           <ScrollView>
           {alltodo.map((item,index)=>{
             return(
               <Task key = {item.id} index = {index+1} value = {item.content} id = {item.id} onDelete = {()=>fetchAlltodo()}/>
               )
            })}
            </ScrollView>
      </View>
      <Form onAddtask = {()=>{fetchAlltodo()}}/>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    
  },
  containerHeader:{
    top:40
  },
  containerTask:{
    flex:1
  }
});
