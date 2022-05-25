import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealList/MealsList';
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';

function FaveriteScreen() {

    const favoriteMealIds = useSelector((state) => state.favorite.ids)

    const faveoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

    if (favoriteMealIds.length === 0) {
        return (
            <View style={styles.rootContainer} >
                <Text style={styles.text}>You have no faverite meals yet!</Text>
            </View>
        );
    }

return (<MealsList items={faveoriteMeals} />);
}

export default FaveriteScreen;

const styles = StyleSheet.create ({
    rootContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    }
})