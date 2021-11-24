import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text>Caja 2</Text>
            <Text>Caja 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'red'
    },
    caja1: {
        borderWidth: 10,
        borderColor: 'white'
    }
})
