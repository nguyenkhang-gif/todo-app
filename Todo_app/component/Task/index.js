import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react-native';
import styles from './style';
import { useState } from 'react';
import axios from "axios"
// import allTaskList from './taskdb.js';


const Task = (props)=>{
    
    const [checked,setCheck] = useState(false)
    const handlePress = ()=>{
        if(!checked){
            setCheck(true)
        }else setCheck(false)
    }
    const handleDelete= async ()=>{
        try{
            const res = await axios({
                  method: 'put',
                  url: `http://10.0.2.2:8800/delete/${props.id}`, // my Node server on 3000 port   
                  withCredentials: true,
               })
            alert("xóa thành công")
            props.onDelete()
          }catch(err){
            console.log(err)
      
          }
    }

    return(
        <TouchableOpacity onPress={handlePress}>
            <View style = {!checked ? styles.containerItem:styles.checkedContainerItem}>
                <View style = {styles.containerNumber}>
                    <Text style = {styles.itemNumber}>{props.index}</Text>  
                </View>  
                <Text style = {!checked ? styles.itemText:styles.checkedItemText}>{props.value}</Text>
                    <TouchableOpacity onPress={handleDelete}>
                        <View>
                                <Text>delete</Text>
                        </View>
                    </TouchableOpacity>
            </View> 
        </TouchableOpacity>
    )
}

export default Task