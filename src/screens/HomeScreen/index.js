import { StyleSheet, FlatList, View } from "react-native";
import InjectorItem from "../../components/InjectorItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <FlatList
        data={restaurants}
        renderItem={({ item }) => <InjectorItem restaurant={item} />}
        showsVerticalScrollIndicator={false} 
    />
  );
}

//export default InjectorItem;

const styles = StyleSheet.create({});
  //page: {
    //padding: 10,
