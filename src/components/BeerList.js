import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import React from 'react'
//Components
import BeerCard from './BeerCard'
//Styles
import { Text } from 'react-native-paper';

const BeerList = ({ list, refreshing, onRefresh, loadMoreItem }) => {

    const emptyList = () => {
        return (<Text variant="bodyLarge" style={styles.text}>Por el momento no hay productos disponibles</Text>)
    };

    const renderItem = ({ item, index }) => {
        const lastIndex = index === list.length - 1
        const lastItem = list.length % 2 !== 0 ? lastIndex : null
        return (
            <View key={index} style={[styles.item, { flex: lastItem ? (1 / 2) : 1, maxWidth: lastItem ? '45%' : '100%' }]}>
                <BeerCard item={item} />
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={list}
                keyExtractor={(x, i) => i}
                renderItem={renderItem}
                onEndReachedThreshold={0.0000000001}
                onEndReached={loadMoreItem}
                ItemSeparatorComponent={() => <Text> </Text>}
                numColumns={2}
                ListEmptyComponent={emptyList}
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

export default BeerList

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingBottom: 40,
    },
    item: {
        marginHorizontal: 11,
        marginVertical: 2,
    },
    text: {
        color: "#8d99ae",
        textAlign: "center",
        marginVertical: 34
    },
})