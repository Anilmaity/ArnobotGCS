/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from "./projectFiles/screens/home/Home.tsx";

function App() {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaProvider>
            <NavigationContainer >
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Home navigation={null} />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App
