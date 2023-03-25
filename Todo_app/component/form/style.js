import { StyleSheet, Text, View } from 'react-native'
import React from 'react-native'

const styles = StyleSheet.create({
    addTask:{
        // backgroundColor:"blue",
        bottom:30,
        paddingHorizontal:20,
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    input:{
        height: 40,
        width :'80%',
        backgroundColor:'white'
    },
    containerBtn:{
        backgroundColor:"#68C5DB",
        borderRadius:10,
        height:40,
        width:70,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles