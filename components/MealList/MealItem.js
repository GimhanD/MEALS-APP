import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDeatils";

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();
  function mealDetalsHandler() {
    navigation.navigate("MealsDetailsScreen", {
      mealID: id,
    });
  }

  return (
    <View style={styles.outerConatiner}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={mealDetalsHandler}
      >
        <View style={styles.innerContiner}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image}></Image>
            <Text style={styles.title}>{title} </Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outerConatiner: {
    margin: 20,
    borderRadius: 16,
    shadowColor: "black",
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContiner: {
    overflow: "hidden",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  pressed: {
    opacity: 0.25,
  },
});
