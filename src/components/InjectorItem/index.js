import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

const InjectorItem = ({title}) => {
  return (
    <View style={styles.InjectorContainer}>
      <Image 
      source={{ 
        uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
      }}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}></Text>
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
