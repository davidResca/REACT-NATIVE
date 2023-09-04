import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const ListItem = ({ item, clearItem, updateItem }) => {

    const handlePressDelete = (id) => {
        clearItem(id);
    }

    //Cambia background color 
    const handlePressUpdate = (id) => {
        updateItem(id)
    }

    return (
        <View style={[styles.listItem, item.done && styles.doneListItem]}>
            <Text style={styles.listText}>{item.text}</Text>

            <View style={styles.buttonContainer}>
                {/* DEL BUTTON */}
                <Pressable onPress={() => handlePressDelete(item.id)}>
                    <AntDesign name="closecircleo" size={28} color="rgb(255, 0, 0)" />
                </Pressable>

                {/* CHECK BUTTON */}
                <Pressable onPress={() => handlePressUpdate(item.id)}>
                    <AntDesign style={styles.iconSuccess} name="checkcircleo" size={28} color={item.done ? "rgb(0, 0, 0)" : "rgb(11, 244, 31)"} />
                </Pressable>
            </View>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 45,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    doneListItem: {
        backgroundColor: 'rgb(11, 244, 31)',
    },
    listText: {
        textTransform: 'uppercase'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
});