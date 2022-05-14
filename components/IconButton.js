import { Pressable, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({onPress, icon, color}) {
  return (
    <Pressable style={({ pressed }) => [
        styles.iconButton,
        pressed ? styles.pressed : true,
      ]} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create ({
    iconButton: {
       marginRight: 10
    },
    pressed: {
        opacity: 0.35
    }

})
