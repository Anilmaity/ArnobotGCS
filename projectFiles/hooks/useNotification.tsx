import messaging from '@react-native-firebase/messaging'
import { useEffect, useState } from 'react'
import { displayNotification } from '../utilities/displayNotification'
import { Platform } from 'react-native'

const useNotification = () => {
  const [Token, setToken] = useState('')
  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages()
    const token = await messaging().getToken()
    console.log('🚀 ~ file: App.tsx:32 ~ getDeviceToken ~ token:', token)
    setToken(token)
    return token
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)
      getDeviceToken()
    }
  }

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      getDeviceToken()
    } else {
      requestUserPermission()
    }

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      displayNotification(remoteMessage)
    })

    return unsubscribe
  }, [])
  return Token
}

export default useNotification
