import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FinanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Gastos e Lucros</Text>
      {/* Adicione lógica para controle financeiro */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
});

export default FinanceScreen;