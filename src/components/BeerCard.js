import { StyleSheet, } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

const BeerCard = ({ item }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover source={{ uri: item.image_url }} resizeMode="center" style={styles.cover} />
      <Card.Title title={item.name} subtitle={"abv: " + item.abv} />
      <Card.Content style={styles.cardContent}>
        <Text variant="bodySmall" style={styles.textColor}>{item.tagline}</Text>
      </Card.Content>
    </Card>
  )
}

export default BeerCard

const styles = StyleSheet.create({
  container: {
    maxHeight: 250,
    borderRadius: 5,
    backgroundColor: "#fff"
  },
  cover: {
    maxHeight: 130,
    borderRadius: 0,
  },
  textColor: {
    color: "#6c757d",
  },
  cardContent: {
    maxHeight: 50
  },
})