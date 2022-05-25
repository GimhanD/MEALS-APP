import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../components/store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList/MealList';

function FaveriteScreen() {

const favoriteMealItemCtx = useContext(FavoritesContext);

const favoritMeals = MEALS.filter((item) => favoriteMealItemCtx.ids.includes(item.id));

if (favoritMeals.length === 0) {
    return (
        <View style={styles.rootContainer} >
            <Text style={styles.text}>You have no faverite meals yet!</Text>
        </View>
    )
}

return <MealList items={favoritMeals} /> 

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