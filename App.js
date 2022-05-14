import { StyleSheet, Text, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="MealsCategory"
          component={CategoriesScreen}
          options={{
            title: "All Catrgories",
          }}
        />
        <Stack.Screen
          name="MealsOverView"
          component={MealsOverviewScreen}
          // options={({route, navigation}) => {
          //   const title = route.params.title;
          //   return {
          //     title: title,
          //   };
          // }    
        //}
        />
        <Stack.Screen
          name="MealsDetailsScreen"
          component={MealsDetailsScreen}
          // options={{headerRight: () => {
          //   return <Button title="tap me"></Button>
          // }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
