import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Main from './src/screens/Main';
import MainApp from './src/navigation/TabNavigator';

export default function App() {
  return <MainApp />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
