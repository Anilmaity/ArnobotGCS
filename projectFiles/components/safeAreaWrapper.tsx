import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SafeAreaWrapper = ({ children }) => {
  return (
    <>
      <SafeAreaView style={styles.style1} />
      <SafeAreaView style={styles.style2}>{children}</SafeAreaView>
      <SafeAreaView style={styles.style1} />
    </>
  )
}

export default SafeAreaWrapper

const styles = StyleSheet.create({
  style1: { opacity: 0 },
  style2: { flex: 1 },
})
