import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleRegistro = () => {
    Alert.alert(`Registro exitoso para: ${nombre} ${apellido}`);
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Registro</Text>
        
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        
        <Text style={styles.label}>Apellido</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ingrese su contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={!mostrarContrasena}
        />

        <View style={styles.togglePasswordContainer}>
          <TouchableOpacity onPress={() => setMostrarContrasena(!mostrarContrasena)}>
            <Text style={styles.togglePasswordText}>
              {mostrarContrasena ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
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
  formContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'flex-start',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#FFC107',
    color: 'black',
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
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  togglePasswordContainer: {
    alignItems: 'center', // Centrar el botón en el contenedor
    marginBottom: 12,
    width: '100%', // Hacer que el contenedor ocupe todo el ancho
  },
  togglePasswordText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Registro;