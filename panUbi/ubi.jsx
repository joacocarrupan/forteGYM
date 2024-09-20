import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ubicacion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es una pantalla negra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Ubicacion;