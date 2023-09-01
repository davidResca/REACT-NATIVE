import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AddItem from './src/components/AddItem';
import ListContainer from './src/components/ListContainer';
import CustomModal from './src/components/CustomModal';

export default function App() {

  const initialList = [
    { id: 1, text: 'peras' },
    { id: 2, text: 'Manzanas' },
    { id: 3, text: 'Mangos' },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = (boolean) => setModalVisible(boolean);

  const [list, setList] = useState(initialList);
  const clearList = () => {
    setList([]);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>

      <CustomModal modalVisible={modalVisible} clearList={clearList} setModalVisible={setModalVisible} handleModal={handleModal} />

      <Image style={styles.topImg} source={{ uri: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} />
      <Text style={styles.titulo}>Lista de compras</Text>

      <AddItem list={list} setList={setList} />
      <ListContainer list={list} />

      <Pressable
        style={styles.delButton}
        onPress={() => handleModal(true)}
      >
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
    marginTop: 20,
    borderWidth: 2,
    padding: 8,
    borderRadius: 50,
  },
});
