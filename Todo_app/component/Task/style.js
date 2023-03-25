import { StyleSheet, Text, View } from 'react-native';



const styles = StyleSheet.create({
      containerItem:{
        margin:7,
        borderRadius:10,
        backgroundColor:'#CFFCFF',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      containerNumber:{
        backgroundColor:'#00AFB9',
        borderRadius:10,
        padding:10
      },
      itemText:{
        fontSize: 17,
        flex:1,
        paddingLeft: 20,
        // textDecorationLine:'line-through'
      },
      checkedItemText:{
        fontSize: 17,
        flex:1,
        paddingLeft: 20,
        textDecorationLine:'line-through'
      },
      // ItemChecked:{
      //   opacity:0.5,
      //   textDecorationStyle:'line-through'
      // }
      checkedContainerItem:{
        margin:7,
        borderRadius:10,
        backgroundColor:'#CFFCFF',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        opacity:0.5,
       
      }
})

export default styles