import { StyleSheet, FlatList, View } from "react-native";
import InjectorItem from "../../components/InjectorItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
          data={restaurants}
          renderItem={({ item }) => <InjectorItem restaurant={item} />}
          showsVerticalScrollIndicator={false} 
      />
    </View>
  );
}

//export default InjectorItem;

const styles = StyleSheet.create({});
  //page: {
    //padding: 10,
