import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BeerCard = ({item}) => {
  return (
    <View>
      <Text>BeerCard
      warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
      </Text>
      {/* <Text>{item}</Text> */}
    </View>
  )
}

export default BeerCard

const styles = StyleSheet.create({})