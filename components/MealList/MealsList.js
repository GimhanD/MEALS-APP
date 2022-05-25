import MealItem from "./MealItem";
import { View, FlatList } from 'react-native';

function MealsList({items}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const MealData = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...MealData} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;
