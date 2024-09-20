import React from 'react';
import { View, TextInput, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';//casa
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';//mancuerna
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';//usuario
import Mchat from '@expo/vector-icons/MaterialCommunityIcons';
import Minfo from '@expo/vector-icons/MaterialCommunityIcons';
import Mapas from '@expo/vector-icons/MaterialCommunityIcons';
import logoF from "../img/logoForte.png";

const { width } = Dimensions.get('window');


const Sidebar = () => {
  const navigation = useNavigation();

  const botonPress = (nombreBoton) => {
    console.log(`${nombreBoton} presionado`);
  };

  const navCasa = () => {
    navigation.navigate('pantallainc');
  };
  const navEJ = () => {
    navigation.navigate('ejercicios');
  };
  const navUS = () => {
    navigation.navigate('Usuario'); 
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image
          source={logoF}
          style={styles.logo}
        />
        <TextInput
          style={styles.buscador}
          placeholder="Buscar aquí..."
          placeholderTextColor="#FFF"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.cateEn}>
          <Text style={styles.cateText}>Categorías</Text>
          <View style={styles.linesContainer}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </View>

        {/* Primer grupo de botones */}
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton}  onPress={() => botonPress('Botón 1')}>
              <MaterialCommunityIcons name="weight-lifter" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Rutinas</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 2')}>
              <MaterialCommunityIcons name="calendar" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Calendario</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 3')}>
              <FontAwesome6 name="clipboard-list" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Actividades</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 4')}>
              <FontAwesome6 name="video" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Tutoriales</Text>
          </View>
        </View>

        {/* Segundo grupo de botones */}
        <View style={styles.buttonRow}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => ('Botón 5')}>
            <Mchat name="wechat" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>chats</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 6')}>
            <FontAwesome6 name="dumbbell" size={36} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Entrenadores</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 7')}>
            <Mapas name="google-maps" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Ubicación</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.yellowButton} onPress={() => botonPress('Botón 8')}>
            <Minfo name="information" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>info gym</Text>
          </View>
        </View>
      </View>
      <View style={styles.pieDpag}>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={navCasa}>
            <MaterialCommunityIcons name="home" size={36} color="black" />
            <Text style={styles.iconText}>Inicio</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={navEJ}>
            <FontAwesome6 name="dumbbell" size={36} color="black" />
            <Text style={styles.iconText}>Ejercicios</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity onPress={navUS}>
              <FontAwesome5 name="user-circle" size={36} color="black" />
              <Text style={styles.iconText}>Usuario</Text>
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
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFC107',
    padding: 17,
    width: '100%',
  },
  logo: {
    width: width > 500 ? 120 : 100,
    height: 60,
    marginTop: 20, 
  },
  buscador: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#FFF',
    backgroundColor: '#333',
    flex: 1,
    marginLeft: 10,
    marginTop: 27, 
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  cateEn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  cateText: {
    color: 'white',
    fontSize: 20,
  },
  linesContainer: {
    flexDirection: 'row',
  },
  line: {
    width: 10,
    height: 3,
    backgroundColor: '#FFC107',
    marginLeft: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 10,
  },
  yellowButton: {
    backgroundColor: '#FFC107',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  pieDpag: {
    backgroundColor: '#FFC107',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    marginTop: 5,
  },
});

export default Sidebar;