import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({ createItem }) => {
    const [texto, setTexto] = useState("");

    const handlePress = () => {
        createItem(texto)
        setTexto("");
    }

    return (
        <View style={styles.buttonContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={(value) => setTexto(value)}
                    placeholder="Escriba aqui..." />
            </View>
            <Pressable
                style={styles.button}
                onPress={handlePress}>
                <Ionicons name="add-circle-outline" size={35} />
            </Pressable>
        </View>
    )
}

export default AddItem;

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 14,
        width: 340,
        padding: 10,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    inputContainer: {
        padding: 7,
        width: 270,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1,
    },
    input: {
        fontSize: 18,
    },
    button: {
        padding: 3,
    },
})