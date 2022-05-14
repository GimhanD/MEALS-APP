import { StyleSheet, Text, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FaveriteScreen from "./screens/FavoriteScreen";

import { Ionicons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CategoryDrawerNavigatorHandler() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="all Categry"
        component={CategoriesScreen}
        options={{
          title: "All Category",
          drawerIcon: ({size, color}) => <Ionicons name='home' color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Faverite"
        component={FaveriteScreen}
        options={{
          title: "Faverite",
          drawerIcon: ({size, color}) => <Ionicons name='star' color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
            component={CategoryDrawerNavigatorHandler}
            options={{
              title: "All Catrgories",
              headerShown: false,
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
