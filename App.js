import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Primeiro App React Native</Text>
      <Text style={styles.contador}>Contador: {contador}</Text>
      <View style={styles.botoesContainer}>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        <Button title="Decrementar" onPress={() => setContador(contador - 1)} color="#841584" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contador: {
    fontSize: 18,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
});