import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // casa
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; // mancuerna
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // usuario
import Ionicons from '@expo/vector-icons/Ionicons';//atras
import AntDesign from '@expo/vector-icons/AntDesign';//suma
import carru from '../img/imgPerfil.jpg';

const Usuario = () => {
  const navigation = useNavigation();

  const navCasa = () => {
    navigation.navigate('pantallainc');
  };

  const navEJ = () => {
    navigation.navigate('ejercicios');
  };

  const navUS = () => {
    navigation.navigate('Usuario'); 
  };

  const navBack = () => {
    navigation.goBack(); 
  };
  const navEdit = () => {
    navigation.navigate('editUser'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={navBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.buscador}
          placeholder="Buscar aquí..."
          placeholderTextColor="#FFF"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.perfilText}>Perfil</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={carru} // Cambia la ruta a tu imagen
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.greeting}>¡Hola!</Text>
          <Text style={styles.name}>carrupan joaquin</Text>
          <Text style={styles.forte}>Forte gym</Text>
          {/* Mover detalles debajo del nombre */}
          <View style={styles.detailsContainer}>

            <Text style={styles.detail}>Masculino</Text>
            <Text style={styles.detail}>Neuquén</Text>
            
              <View style={styles.addButton}>
                <TouchableOpacity onPress={navEdit}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            
              </View>
          </View>
        </View>
      </View>
      <View style={styles.pieDpag}>
        <View style={styles.iconoCon}>
          <View style={styles.iconoW}>
            <TouchableOpacity onPress={navCasa}>
              <MaterialCommunityIcons name="home" size={36} color="black" />
              <Text style={styles.TextIcono}>Inicio</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconoW}>
            <TouchableOpacity onPress={navEJ}>
              <FontAwesome6 name="dumbbell" size={36} color="black" />
              <Text style={styles.TextIcono}>Ejercicios</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconoW}>
            <TouchableOpacity onPress={navUS}>
              <FontAwesome5 name="user-circle" size={36} color="black" />
              <Text style={styles.TextIcono}>Usuario</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between', // Mantiene el pie de página en la parte inferior
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    padding: 5,
  },
  buscador: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: "black",
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 15,
  },
  content: {
    alignItems: 'flex-start',
    paddingHorizontal: 50, // Espaciado horizontal
  },
  perfilText: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold', 
    marginBottom: 0, // Espacio debajo del texto "Perfil"
    marginTop: -450,
  },
  card: {
    backgroundColor: '#FFC107', // Color de fondo
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 9, // Para Android
    margin: 5,
    marginTop: -840, // Ajusta este valor negativo si es necesario
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 32,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  forte:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, // Espacio entre el nombre y los detalles
  },
  detail: {
    marginRight: 10,
    fontSize: 14,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#000',
  },
  pieDpag: {
    backgroundColor: '#FFC107',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  iconoCon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconoW: {
    alignItems: 'center',
  },
  TextIcono: {
    color: 'white',
    marginTop: 5,
  },
});

export default Usuario;