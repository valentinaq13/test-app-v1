import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchQuery, onChangeSearch, loading, onIconPress, onClearIconPress }) => {
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchContainer}
        placeholder="Search by name"
        onChangeText={onChangeSearch}
        onClearIconPress={onClearIconPress}
        onIconPress={onIconPress}
        value={searchQuery}
        loading={loading}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    paddingBottom: 13,
  },
  searchContainer: {
    marginHorizontal: 13,
  },
})
