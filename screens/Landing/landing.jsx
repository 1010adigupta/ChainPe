import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import ButtonCustom from "../../components/Button";
import LandingText1 from "../../components/LandingText1";

const { width, height } = Dimensions.get("window");

const Landing = () => {
  const [loaded] = useFonts({
    Montserrat: require("../../assets/fonts/landingfont.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    //main div - 2 flex
    <View style={styles.container}>
      <View>
        <Image
          style={styles.landingimage}
          source={require("../../assets/landing.png")}
        />
      </View>

      <View style={styles.container_sub1}>
        <LandingText1 />
        <View>
          <ButtonCustom title="Continue" route="AuthPage"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container_sub1: {
    flex: 1,
    gap: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  landingimage: {
    width: width,
    height: height * 0.69,
  },

  maintext: {
    margin: 10,
    fontFamily: "landingfont",
    fontSize: 20,
  },
  subtext: {
    margin: 10,
  },
});

export default Landing;
