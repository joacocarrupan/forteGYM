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
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={!mostrarContrasena}
        />
        <TouchableOpacity onPress={() => setMostrarContrasena(!mostrarContrasena)}>
          <Text style={styles.togglePasswordText}>
            {mostrarContrasena ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
          </Text>
        </TouchableOpacity>
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
    alignItems: 'center',
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
    color: '#333',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#F2F2F2',
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
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  togglePasswordText: {
    color: '#6200EE',
    fontSize: 16,
    marginBottom: 12,
  },
});

export default Registro;