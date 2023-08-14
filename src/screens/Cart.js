import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.text}>Soon</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#8b8c89",
  },
});
