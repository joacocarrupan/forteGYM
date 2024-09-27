import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Edit = () => {
    const navigation = useNavigation();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [imagenPerfil, setImagenPerfil] = useState(null);

    const navBack = () => {
        navigation.goBack();
    };

    const manejarActualizar = () => {
        console.log('Perfil actualizado:', { nombre, apellido, genero, email, ciudad, password });
    };

    const cambiarImagen = () => {
        alert('Funcionalidad de cambiar imagen no implementada');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.atras}>
                <TouchableOpacity onPress={navBack}>
                    <Ionicons name="chevron-back-sharp" size={32} color="yellow" />
                </TouchableOpacity>
            </View>
            <View style={styles.editar}>
                <Text style={styles.text}>Editar Perfil</Text>
                <TouchableOpacity style={styles.imageContainer} onPress={cambiarImagen}>
                    {imagenPerfil ? (
                        <Image source={{ uri: imagenPerfil }} style={styles.image} />
                    ) : (
                        <Ionicons name="person-circle-outline" size={100} color="gray" />
                    )}
                    <Ionicons name="camera" size={24} color="white" style={styles.cameraIcon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    placeholderTextColor="gray"
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellido"
                    placeholderTextColor="gray"
                    value={apellido}
                    onChangeText={setApellido}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Género"
                    placeholderTextColor="gray"
                    value={genero}
                    onChangeText={setGenero}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Gmail"
                    placeholderTextColor="gray"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ciudad"
                    placeholderTextColor="gray"
                    value={ciudad}
                    onChangeText={setCiudad}
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputWithoutIcon}
                        placeholder="Contraseña"
                        placeholderTextColor="gray"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!mostrarPassword}
                    />
                    <TouchableOpacity onPress={() => setMostrarPassword(prev => !prev)} style={styles.eyeIcon}>
                        <Ionicons 
                            name={mostrarPassword ? "eye-off" : "eye"} 
                            size={24} 
                            color="white" 
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={manejarActualizar}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    atras: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop:70,
    },
    editar: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
        marginTop:-50,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: 'black',
        borderRadius: 15,
        padding: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    inputWithoutIcon: {
        width: '90%',
        backgroundColor: '#333',
        color: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    button: {
        backgroundColor: '#ffcc00',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Edit;