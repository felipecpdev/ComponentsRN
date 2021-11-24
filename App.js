import React from 'react';
import {BoxObjectModelScreen} from "./src/screens/BoxObjectModelScreen";
import {SafeAreaView} from "react-native";
import {DimensionesScreen} from "./src/screens/DimensionesScreen";
import {PositionScreen} from "./src/screens/PositionScreen";
import {FlexScreen} from "./src/screens/FlexScreen";

export const App = () => {


    return (
        <SafeAreaView style={{flex: 1}}>
            {/*<DimensionesScreen/>*/}
            <FlexScreen/>
        </SafeAreaView>
    )
}
