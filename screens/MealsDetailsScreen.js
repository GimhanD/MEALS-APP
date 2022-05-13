import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDeatils";
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route }) {
  const mealId = route.params.mealID;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredients => <Text key={ingredients}>
          {ingredients}
      </Text>)}
      <Text>Steps</Text>
      {selectedMeal.steps.map(steps => <Text key={steps}>
          {steps}
      </Text>)}

    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create ({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white',
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4
    }
})
