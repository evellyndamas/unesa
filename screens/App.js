import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import StockScreen from './screens/StockScreen';
import FinanceScreen from './screens/FinanceScreen';
import { AppProvider } from './context';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Cadastro" component={RegisterScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Estoque" component={StockScreen} />
          <Tab.Screen name="Finanças" component={FinanceScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}