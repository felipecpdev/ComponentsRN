import React from 'react';
import {Dimensions, StyleSheet, Text, useWindowDimensions, View} from "react-native";


// const {width, height} = Dimensions.get('window');


export const DimensionesScreen = () => {
    const {width, height} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.cajaMorada, width: width * 0.4}}/>
                <View style={styles.cajaNaranja}/>
            </View>
            <Text style={styles.title}>W: {width}, H: {height}  </Text>

        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#4D4CCA',
        height: '50%',
        // width: '20%'
    },
    cajaNaranja: {
        backgroundColor: '#F50104'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }

});