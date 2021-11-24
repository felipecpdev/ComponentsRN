import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Box Object Model</Text>
        </View>
    );
};



const styles= StyleSheet.create({
    container:{
      backgroundColor:'#42C4D8',
        flex:1
    },
    title:{
        padding:30,
        fontSize:30,
        marginTop:20,
        marginHorizontal:20,
       // width:200,
        borderWidth:10
        // backgroundColor:'red'
    }
})


