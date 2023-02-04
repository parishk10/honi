import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetails';
import RootNavigator from './src/navigation';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="Light" />
    </NavigationContainer>
  );
}