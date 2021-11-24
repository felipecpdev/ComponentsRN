import React from 'react';
import {StyleSheet, View} from "react-native";

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View  style={styles.cajaMorada}/>
            <View  style={styles.cajaNaranja}/>
            <View  style={styles.cajaVerde}/>

        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        // justifyContent:'center',
        // alignItems:'center',
        flex:1,
        backgroundColor:'#42C4D8'
    },
    cajaMorada:{
        height:100,
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#4D4CCA',
        position: 'absolute',
        right:0

    },
    cajaNaranja:{
        height:100,
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#E9A333',
        position:'absolute',
        bottom:0,
        right:0

    },  cajaVerde:{
        height:100,
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#208105',
        position:'absolute',
        bottom:0,
        left:0

    },

})