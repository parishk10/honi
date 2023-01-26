import { StyleSheet, Text, View, Image } from "react-native";

const InjectorItem = ({ restaurant }) => {
  return (
    <View style={styles.InjectorContainer}>
      <Image 
      source={{ 
        uri: restaurant.image,
      }}
      style={styles.image}
    />
    <Text style={styles.title}>{restaurant.name}</Text>
    <Text style={styles.subtitle}>$ {restaurant.deliveryFee} {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
  </View>
    
  );
};

export default InjectorItem;

const styles = StyleSheet.create({
  InjectorContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
