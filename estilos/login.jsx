import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, TextInput, Alert, Image } from 'react-native';
import Logo from'./img/FORTE';

const Boton = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handlePress = () => {
    Alert.alert(`Botón presionado. Usuario: ${usuario}, Contraseña: ${contrasena}`);
  };

  const handleNoTieneAccount = () => {
    navigation.navigate('Registro'); //pantalla de registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}><h2>Bienvenido a FORTE</h2></Text>
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
        <View style={styles.space} />
        <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={handleNoTieneAccount}>
        <Text style={styles.linkText}>No tiene cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Fondo negro
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
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
  space: {
    width: 25, // Espacio entre las líneas
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
    backgroundColor: '#6200EE',
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
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Boton;