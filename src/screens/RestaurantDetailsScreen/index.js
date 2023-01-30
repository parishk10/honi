import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
//import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
//import Header from "./Header";
//import styles from "./styles";
//import styles from "./styles";
//import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: restaurant.image}} style={styles.image}/>

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.minDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  container: {
    margin: 10,
  },
});

export default RestaurantDetailsPage;

