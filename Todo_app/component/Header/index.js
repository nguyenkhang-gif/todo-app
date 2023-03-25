import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react-native';
import styles from './style';


const Header = ()=>{
    return(
        <View style = {styles.containerTop}>
            <View style = {styles.top}>
                <Text style = {styles.topText}>
                    Todo List
                </Text>
            </View>
        </View>
    )
}
export default Header