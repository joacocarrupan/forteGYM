import React from 'react';
//inicio/3 a 20/
/////registroYsesion///
//import React from 'react';
//import { StatusBar } from 'expo-status-bar';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Boton from './estilos/login'; 
//import Registro from './estilos/registro';
import { View, StyleSheet } from 'react-native';
import Sidebar from './pantallas/pantallainc'; 

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Sidebar />
    </View>
        /////registroYsesion///
    //import React from 'react';
    //import { StatusBar } from 'expo-status-bar';
    //import { NavigationContainer } from '@react-navigation/native';
    //import { createNativeStackNavigator } from '@react-navigation/native-stack';
    //import Boton from './estilos/login'; 
    //import Registro from './estilos/registro';
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Color de fondo negro
  },
});

export default App;