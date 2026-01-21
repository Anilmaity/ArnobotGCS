import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CameraScreen from "../camera/CameraScreen.tsx";
import Home from "../home/Home.tsx";

const Stack = createNativeStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen component={Home} name="Home" />
            {/*<Stack.Screen name="CameraScreen" component={CameraScreen} />*/}
        </Stack.Navigator>
    )
}

export default HomeStack

