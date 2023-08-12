import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import BeerCard from './BeerCard'

const BeerList = ({ list, refreshing, onRefresh }) => {

    const emptyList = () => {
        return (<Text>Por el momento no hay productos disponibles</Text>)
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <BeerCard item={item} />
        </View>
    );
    return (
        <View>
            
            <FlatList
            ListHeaderComponent={<Text>BeerList</Text>}
                data={list}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <Text> </Text>}
                numColumns={2}
                renderItem={renderItem}
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
        margin: 10
    },
    item: {
        flex: 1,
        marginHorizontal: 11,
        marginVertical: 2,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
})