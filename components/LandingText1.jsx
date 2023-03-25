import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";

const LandingText1 = (props) => {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/landingfont.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.text}>
      <Text style={styles.maintext}>Welcome to ChainPe</Text>
      <Text style={styles.subtext}>
        An Easy to use Crypto Payment Interface. Bringing simplified Crypto UPI transactions at your fingertips.
      </Text>
    </View>
  );
};

export default LandingText1;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#5b42754d",
  },
  text: {
    margin: 30,
  },
  maintext: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  subtext: {
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 20,
    fontWeight: "bold",
  },
});
