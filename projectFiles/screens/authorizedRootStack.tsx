import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/home/Home'
import CameraScreen from "./camerascreen/CameraScreen.tsx";


const Drawer = createDrawerNavigator()

const AuthorizedRootStack = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="CameraScreen" component={CameraScreen} />
    {/*<Drawer.Screen name="ThermalCameraScreen" component={ThermalCameraScreen} />*/}
    {/*<Drawer.Screen name="MapScreen" component={MapScreen} />*/}
    </Drawer.Navigator>
)
}

export default AuthorizedRootStack
