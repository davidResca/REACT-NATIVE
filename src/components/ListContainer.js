import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ListItem from './ListItem';

const ListContainer = ({ list }) => {

    return (
        <View style={styles.listContainer}>
            {
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ListItem item={item} />}
                />
            }
        </View>
    )
}

export default ListContainer;


const styles = StyleSheet.create({
    listContainer: {
        width: 340,
        marginTop: 40,
        borderRadius: 14,
        borderWidth: 1,
        padding: 10,
        gap: 10,
    },
});