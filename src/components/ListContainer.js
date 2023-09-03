import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ListItem from './ListItem';

const ListContainer = ({ list, clearItem, updateItem }) => {


    return (
        <View style={[styles.listContainer, list.length === 0 && styles.listNoBorder]}>
            {
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ListItem  updateItem={updateItem} clearItem={clearItem} item={item} />}
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
    listNoBorder: {
        borderWidth: 0,
    }
});