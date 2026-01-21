import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SafeAreaWrapper from '../../components/safeAreaWrapper';
import COLORS from '../../styles/colors';
import { fs, vs } from '../../utilities/responsiveness';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaWrapper>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CameraScreen')}
          >
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ThermalCameraScreen')}
          >
            <Text style={styles.buttonText}>Open Thermal Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MapScreen')}
          >
            <Text style={styles.buttonText}>Open Google Maps</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaWrapper>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: COLORS.backgroundWhite },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: vs(20),
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: vs(14),
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.backgroundWhite,
    fontSize: fs(16),
    fontFamily: 'Inter-Medium',
  },
});
