import { View, Text, StyleSheet } from 'react-native';


function MealDetails ({duration, affordability, complexity}) {
  return (
    <View style={styles.textConatiner}>
    <Text style={styles.text}>{affordability.toUpperCase()}</Text>
    <Text style={styles.text}>{complexity.toUpperCase()}</Text>
    <Text style={styles.text}>{duration}</Text>
  </View>
  );

}

export default MealDetails;

const styles = StyleSheet.create ({
    textConatiner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
      },
      text: {
        margin: 8,
      },
})