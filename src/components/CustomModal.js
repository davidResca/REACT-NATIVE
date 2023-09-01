import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomModal = ({modalVisible, clearList, handleModal}) => {
  return (
    <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>¿Vas a borrar la lista completa?</Text>
          <View style={styles.modalButtonContainer}>
            <Pressable style={styles.modalButton} onPress={clearList}>
              <Text>SI</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={() => handleModal(false)}>
              <Text>NO</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}

export default CustomModal;

const styles = StyleSheet.create({
    modalView: {
      alignSelf: 'center',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      textAlign: 'center',
    },
    modalButtonContainer: {
      flexDirection: 'row',
      gap: 40,
      marginTop: 25,
      //justifyContent: 'space-evenly'
    },
    modalButton: {
      borderWidth: 1,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
  
    }
  });
  