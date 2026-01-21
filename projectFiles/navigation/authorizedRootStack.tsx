import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../screens/home/Home.tsx'
import CameraScreen from '../screens/camera/CameraScreen.tsx'
// import ThermalCameraScreen from '../screens/thermal/ThermalCameraScreen'
// import MapScreen from '../screens/map/MapScreen'

const Drawer = createDrawerNavigator()

const AuthorizedRootStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{ title: 'Home' }}
            />

            <Drawer.Screen
                name="CameraScreen"
                component={CameraScreen}
                options={{ title: 'Camera' }}
            />

            {/*<Drawer.Screen*/}
            {/*    name="ThermalCameraScreen"*/}
            {/*    component={ThermalCameraScreen}*/}
            {/*    options={{ title: 'Thermal Camera' }}*/}
            {/*/>*/}

            {/*<Drawer.Screen*/}
            {/*    name="MapScreen"*/}
            {/*    component={MapScreen}*/}
            {/*    options={{ title: 'Google Maps' }}*/}
            {/*/>*/}
        </Drawer.Navigator>
    )
}

export default AuthorizedRootStack
