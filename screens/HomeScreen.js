import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Loja Online!</Text>
      <Button title="Consultar Preços" onPress={() => { /* lógica para consultar preços */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;