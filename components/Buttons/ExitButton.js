import { IconButtonExit } from "./IconButton";
import { useLayoutEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

function Exit({ navigation }) {
  const ExitHandler = async () => {
    await AsyncStorage.setItem("token", "");
    await AsyncStorage.setItem("user", "");
    navigation.navigate("Login");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButtonExit onPress={ExitHandler} />;
      },
    });
  }, [navigation, ExitHandler]);
}

export default Exit;
