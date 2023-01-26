import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from "react-native";
import InjectorItem from "./src/components/InjectorItem";
import restaurants from "./assets/data/restaurants.json"

export default function App() {
  return (
    <View style={styles.container}>
      <InjectorItem restaurants={restaurants[0]}/>
      <InjectorItem restaurants={restaurants[1]}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
