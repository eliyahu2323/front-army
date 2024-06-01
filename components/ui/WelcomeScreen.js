import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Exit from "../Buttons/ExitButton";
import { GetUser } from "./../../Services/GetUserAuth";

function Welcome({ navigation }) {
  Exit({ navigation });
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const currentUser = await GetUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/Alexandroni.svg.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>שלום {user.name}</Text>
        <Text style={styles.userInfoText}>גדוד {user.battalion}</Text>
        <Text style={styles.squadInfoText}>{user.group}</Text>
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#172554",
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  greetingText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  userInfoText: {
    fontSize: 28,
    color: "#ffffff",
    textAlign: "center",
  },
  squadInfoText: {
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
  },
});
