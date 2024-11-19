import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StockScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciamento de Estoque</Text>
      {/* Adicione lógica para gerenciar estoque */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default StockScreen;