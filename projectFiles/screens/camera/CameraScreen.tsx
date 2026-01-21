import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import SafeAreaWrapper from '../../components/safeAreaWrapper'
import COLORS from '../../styles/colors'
import { fs, vs } from '../../utilities/responsiveness'

const CameraScreen = () => {
  const devices = useCameraDevices()
  const device = devices.back
  const [hasPermission, setHasPermission] = useState(false)

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission()
      setHasPermission(status === 'authorized')
    })()
  }, [])

  if (!device || !hasPermission) {
    return (
        <View style={styles.center}>
          <Text>Waiting for camera permission...</Text>
        </View>
    )
  }

  return (
      <View style={styles.mainContainer}>
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />

        <SafeAreaWrapper>
          <View style={styles.controls}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Capture</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaWrapper>
      </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    position: 'absolute',
    bottom: vs(30),
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: vs(14),
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.backgroundWhite,
    fontSize: fs(16),
    fontFamily: 'Inter-Medium',
  },
})
