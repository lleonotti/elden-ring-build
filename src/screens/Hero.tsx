import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
function Hero({ navigation }) {
  return (
    // <SafeAreaView style={styles.container}>
    <ImageBackground
      style={styles.image}
      source={require('../../assets/elden-ring-logo.png')}
    >
      <View style={styles.heroTextSection}>
        <Text style={styles.heading}>Elden Ring Build Generator</Text>
        <Text style={styles.subHeading}>
          This is character build generator for new and veteran players looking
          for a challenge
        </Text>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Build')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Hero')}
          >
            <Text style={styles.buttonText}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    // </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  logoSection: {
    flex: 1
  },
  image: {
    flex: 1
  },
  heroTextSection: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  heading: {
    fontSize: 40,
    color: 'white',
    textAlign: 'left'
  },
  subHeading: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left'
  },

  buttonSection: {
    width: '100%',
    gap: 10
  },

  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#AE8A58',
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '700'
  }
})

export default Hero
