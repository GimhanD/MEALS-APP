import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDeatils";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function faveoriteIconeHandler() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    {
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              onPress={faveoriteIconeHandler}
              icon="star"
              color="white"
            />
          );
        },
      });
    }
  }, []);

  return (
    <ScrollView style={styles.rootConatainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <View style={styles.listOuterContiner}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootConatainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#351401",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContiner: {
    alignItems: "center",
  },
});
