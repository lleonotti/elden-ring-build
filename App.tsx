import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Hero from './src/screens/Hero'
import Build from './src/screens/Build'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hero">
        <Stack.Screen name="Hero" component={Hero} />
        <Stack.Screen name="Build" component={Build} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
