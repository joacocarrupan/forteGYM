import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Boton from './estilos/login';
import Registro from './estilos/registro';
import Sidebar from './pantallas/pantallainc';
import Usuario from './PanUsuario/usuario';
import EJ from './panEje/ejercicios';
import Edit from './PanUsuario/editUser';
import Ubicacion from './panUbi/ubi';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Boton} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Pantallainc" component={Sidebar} />
        <Stack.Screen name="Usuario" component={Usuario}/>
        <Stack.Screen name="pantallainc" component={Sidebar}/>
        <Stack.Screen name="ejercicios" component={EJ}/>
        <Stack.Screen name="editUser" component={Edit}/>
        <Stack.Screen name="ubi" component={Ubicacion}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;