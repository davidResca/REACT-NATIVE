import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({ item }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>{item.text}</Text>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        justifyContent: 'center',
        minHeight: 45,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    listText: {
        textTransform: 'uppercase'
    },
});