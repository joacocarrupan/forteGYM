import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Edit = () => {
    const navigation = useNavigation();

    const navBack = () => {
        navigation.goBack(); 
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.atras}>
                <TouchableOpacity onPress={navBack}>
                    <Ionicons name="arrow-back" size={37} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.editar}>
                <Text style={styles.text}>editar perfil</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 5, // Espacio superior para el botón
    },
    atras: {
        top: 39,
        left: 35,
    },
    editar: {
        alignItems: 'center',
    },
    text: {
        marginTop:-9,
        color: 'white',
        fontSize: 32, // Tamaño de letra aumentado
    },
});

export default Edit;