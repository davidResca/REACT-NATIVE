import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomModal = ({modalVisible, clearList, handleModal}) => {
  return (
    <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>¿Vas a borrar la lista completa?</Text>
          <View style={styles.modalButtonContainer}>
            <Pressable style={styles.modalButtonSI} onPress={clearList}>
              <Text>SI</Text>
            </Pressable>
            <Pressable style={styles.modalButtonNO} onPress={() => handleModal(false)}>
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
      flex:1,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 25,
      padding: 35,
      alignItems: 'center',
      justifyContent: 'center',
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
    modalButtonSI: {
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'rgb(219, 77, 77)'
    },
    modalButtonNO:{
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: 'lightgreen'
    }
    
  });
  