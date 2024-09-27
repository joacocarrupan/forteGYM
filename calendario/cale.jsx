import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

// Configuración en español
LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  monthNamesShort: [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

const Calendario = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [note, setNote] = useState('');

  const navCasa = () => navigation.navigate('pantallainc');
  const navEJ = () => navigation.navigate('ejercicios');
  const navUS = () => navigation.navigate('Usuario'); 
  const navBack = () => navigation.goBack(); 

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setNote(''); // Limpiar la nota al seleccionar un nuevo día
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={navBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.buscador}
          placeholder="Buscar aquí..."
          placeholderTextColor="#FFF"
        />
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: 'black' } }}
          theme={{
            backgroundColor: '#FFC107',
            calendarBackground: '#FFC107',
            textSectionTitleColor: 'black',
            selectedDayBackgroundColor: 'black',
            selectedDayTextColor: 'white',
            todayTextColor: 'black',
            dayTextColor: 'black',
            monthTextColor: 'black',
            arrowColor: 'black',
            textDisabledColor: '#606060',
          }}
        />
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>Nota para {selectedDate}:</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="Escribe aquí..."
          placeholderTextColor="#FFF"
          value={note}
          onChangeText={setNote}
        />
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
    justifyContent: 'space-between',
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
  calendarContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    backgroundColor: '#FFC107', // Fondo del contenedor
  },
  noteContainer: {
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  noteTitle: {
    color: '#FFC107',
    marginBottom: 5,
  },
  noteInput: {
    height: 100,
    borderColor: '#FFC107',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
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

export default Calendario;