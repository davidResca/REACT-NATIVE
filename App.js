import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImg}
        source={{ uri: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} />
      
      <Text style={styles.titulo}>Lista de compras</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Escriba aqui..." />
        </View>

        <Pressable style={styles.button}>
          <Ionicons name="add-circle-outline" size={35} />
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Peras</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Bananas</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Queso</Text>
        </View>
      </View>
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
  }
});
