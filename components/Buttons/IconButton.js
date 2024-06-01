import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function IconButtonExit({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons name="logout" size={30} color="black" />
    </Pressable>
  );
}
