import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function App() {

  const initialList = [
    { id: 1, text: 'peras' },
    { id: 2, text: 'Manzanas' },
    { id: 3, text: 'Mangos' },
  ]

  const [texto, setTexto] = useState("");
  const [list, setList] = useState(initialList);

  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    list.push({
      id: Math.random(),
      text: texto,
    })
    setList(list)
    setTexto("");
    //console.log(list);
  }

  const handleModal = (boolean) => setModalVisible(boolean);

  const clearList = () => {
    setList([]);
    setModalVisible(false);
  }
  

  console.log(texto);
  return (
    <View style={styles.container}>

      <Modal
      style={styles.modalDelete}
        animationType='slide'
        /* transparent={true} */
        visible={modalVisible}>
        <View>
          <Text>¿Vas a borrar la lista completa?</Text>

          <Pressable onPress={clearList}>
            <Text>SI</Text>
          </Pressable>
          <Pressable onPress={()=> handleModal(false)}>
            <Text>NO</Text>
          </Pressable>
        </View>
      </Modal>

      <Image style={styles.topImg} source={{ uri: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} />
      <Text style={styles.titulo}>Lista de compras</Text>

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

      <View style={styles.listContainer}>
        {
          /* list.map(el => (<View key={el.id} style={styles.listItem}>
            <Text style={styles.listText}>{el.text}</Text>
          </View>)) */

          <FlatList
            data={list}
            keyExtractor={item => item.id}
            renderItem={
              ({ item }) => <View style={styles.listItem}>
                <Text style={styles.listText}>{item.text}</Text>
              </View>
            } />
        }
      </View>
                <Pressable style={styles.delButton} onPress={()=> handleModal(true)}>
                  <MaterialIcons name="delete" size={24} color="black" />
                </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    tintColor: '#000000',
    backgroundColor: 'hsl(2, 73%, 99%)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo: {
    marginTop: 40,
    fontSize: 30,
    borderBottomWidth: 2,
    borderColor: 'red'
  },
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
  listContainer: {
    width: 340,
    marginTop: 40,
    borderRadius: 14,
    borderWidth: 1,
    padding: 10,
    gap: 10,
  },
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
  topImg: {
    marginTop: 70,
    width: 340,
    height: 140,
    borderRadius: 14,
  },
  delButton: {
    marginTop:20,
    borderWidth: 2,
    padding:8,
    borderRadius:50,
  },
});
