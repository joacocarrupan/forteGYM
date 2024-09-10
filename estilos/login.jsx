import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert, Image } from 'react-native';
import Logo from "../img/logoForte.png"
const Boton = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  

  const handlePress = () => {
    Alert.alert(`Botón presionado. Usuario: ${usuario}, Contraseña: ${contrasena}`);
  };

  const handleNoTieneAccount = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image 
          source={Logo} 
          style={styles.imagen}
        />
      </View>
      <Text style={styles.bienvenidoText}>Bienvenido a FORTE</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Iniciar Sesión</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese el Correo"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese la Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <TouchableOpacity onPress={handleNoTieneAccount}>
          <Text style={styles.linkText}>No tiene cuenta</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'black', 
    padding: 20,
  },
  imagenContainer: {
    position: 'absolute', 
    top: -25, 
    left: 10, 
  },
  bienvenidoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagen: {
    width: 200, 
    height: 190, 
    resizeMode: 'contain',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'yellow',
  },
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'yellow',
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  button: {
    width: '100%',
    backgroundColor: 'grey',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Boton;