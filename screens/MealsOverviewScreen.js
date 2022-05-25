import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (catrgory) => catrgory.id === catID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);



  return (
    <MealsList items={displayedMeals}/>
  );
}

export default MealsOverviewScreen;
