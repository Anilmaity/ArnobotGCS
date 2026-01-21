import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './projectFiles/screens/home/Home'
import CameraScreen from './projectFiles/screens/camera/CameraScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/*<Stack.Navigator screenOptions={{ headerShown: false }}>*/}
                {/*    <Stack.Screen name="Home" component={Home} />*/}
                {/*    <Stack.Screen name="CameraScreen" component={CameraScreen} />*/}
                {/*</Stack.Navigator>*/}
                <Home />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
